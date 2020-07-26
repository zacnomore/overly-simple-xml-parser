import { XmlNode, ParsedObject, AllowedTypes, AttributeMap } from "./models";

export function parse(xmlData: string) {
  const traversableObj = getTraversalObj(xmlData);
  return convertToJson(traversableObj);
}

export function convertToJson(node: XmlNode): ParsedObject | AllowedTypes {
  const jObj: ParsedObject = {};

  const isEmptyObject = (obj: object) => Object.keys(obj).length === 0;
  //when no child node or attr is present
  if ((isEmptyObject(node.child)) && (!node.attrsMap || isEmptyObject(node.attrsMap))) {
    return isExist(node.val) ? node.val : '';
  } else if (isExist(node.val) && (!(typeof node.val === 'string' && (node.val === '' || node.val === '\\c')))) {
    jObj['#text'] = node.val;
  }

  Object.assign(jObj, node.attrsMap);

  Object.entries(node.child).forEach(([key, value]) => {
    if (Array.isArray(value) && value.length > 1) {
      jObj[key] = [];
      for (var tag in value) {
        (jObj[key] as unknown[]).push(convertToJson(value[tag]));
      }
    } else {
      const jsVal = convertToJson(value[0]);
      if(jsVal) {
        jObj[key] = jsVal; 
      }
    }
  });

  //add value
  return jObj;
}

 function isExist(v: Object | undefined): v is Object {
  return typeof v !== 'undefined';
}

export function getTraversalObj(xmlData: string): XmlNode {
  xmlData = xmlData.replace(/(\r\n)|\n/, " ");
  const xmlObj = new XmlNode('!xml', undefined, undefined);
  let currentNode: XmlNode = xmlObj;
  let textData: string = "";

  for(let i = 0; i < xmlData.length; i++) {
    const ch = xmlData[i];
    if(ch === '<') {
      if( xmlData[i+1] === '/') { //Closing Tag
        const closeIndex = findClosingIndex(xmlData, ">", i, "Closing Tag is not closed.")
        if(currentNode) {
          if(currentNode.val) {
            currentNode.val = getValue(currentNode.val) + '' + processTagValue(textData);
          } else{
            currentNode.val = processTagValue(textData);
          }
        }
        // @ts-expect-error
        currentNode = currentNode.parent;
        textData = "";
        i = closeIndex;
      } else if( xmlData[i+1] === '?') {
        i = findClosingIndex(xmlData, "?>", i, "Pi Tag is not closed.")
      } else if(xmlData.substr(i + 1, 3) === '!--') {
        i = findClosingIndex(xmlData, "-->", i, "Comment is not closed.")
      } else if( xmlData.substr(i + 1, 2) === '!D') {
        const closeIndex = findClosingIndex(xmlData, ">", i, "DOCTYPE is not closed.")
        const tagExp = xmlData.substring(i, closeIndex);
        if(tagExp.indexOf("[") >= 0) {
          i = xmlData.indexOf("]>", i) + 1;
        } else{
          i = closeIndex;
        }
      } else if(xmlData.substr(i + 1, 2) === '![') {
        const closeIndex = findClosingIndex(xmlData, "]]>", i, "CDATA is not closed.") - 2
        const tagExp = xmlData.substring(i + 9,closeIndex);

        //considerations
        //1. CDATA will always have parent node
        //2. A tag with CDATA is not a leaf node so it's value would be string type.
        if(textData) {
          currentNode.val = getValue(currentNode.val) + '' + processTagValue(textData);
          textData = "";
        }
        currentNode.val = (currentNode.val || '') + (tagExp || '');

        i = closeIndex + 2;
      } else {//Opening tag
        const result = closingIndexForOpeningTag(xmlData, i+1)
        let tagExp = result.data || '';
        const closeIndex = result.index;
        const separatorIndex = tagExp.indexOf(" ");
        let tagName = tagExp;
        if(separatorIndex !== -1) {
          tagName = tagExp.substr(0, separatorIndex).replace(/\s\s*$/, '');
          tagExp = tagExp.substr(separatorIndex + 1);
        }

        //save text to parent node
        if (currentNode && textData) {
          if(currentNode.tagname !== '!xml') {
            currentNode.val = getValue(currentNode.val) + '' + processTagValue(textData);
          }
        }

        if(tagExp.length > 0 && tagExp.lastIndexOf("/") === tagExp.length - 1) { //selfClosing tag

          if(tagName[tagName.length - 1] === "/") { //remove trailing '/'
            tagName = tagName.substr(0, tagName.length - 1);
            tagExp = tagName;
          } else{
            tagExp = tagExp.substr(0, tagExp.length - 1);
          }

          const childNode = new XmlNode(tagName, currentNode, '');
          if(tagName !== tagExp) {
            childNode.attrsMap = buildAttributesMap(tagExp);
          }
          currentNode.addChild(childNode);
        } else{//opening tag

          const childNode = new XmlNode( tagName, currentNode, undefined);
          if(tagName !== tagExp) {
            childNode.attrsMap = buildAttributesMap(tagExp);
          }
          currentNode.addChild(childNode);
          currentNode = childNode;
        }
        textData = "";
        i = closeIndex;
      }
    } else{
      textData += xmlData[i];
    }
  }
  return xmlObj;
}

function findClosingIndex(xmlData: string, str: string, i: number, errMsg: string): number {
  const closingIndex = xmlData.indexOf(str, i);
  if(closingIndex === -1) {
    throw new Error(errMsg)
  } else{
    return closingIndex + str.length - 1;
  }
}

function getValue(v: AllowedTypes): Omit<AllowedTypes, 'undefined'> {
  if (isExist(v)) {
    return v;
  } else {
    return '';
  }
}

function processTagValue(val: string): string | number | boolean {
  if(val === 'false' || val === 'true') {
    return val === 'true';
  } else if (val.indexOf('0x') !== -1) {
    //support hexa decimal
    return parseInt(val, 16);
  } else if (val.indexOf('.') !== -1 && !isNaN(parseFloat(val))) {
    return parseFloat(val);
  } else if (!isNaN(parseInt(val))) {
    return parseInt(val, 10);
  } else {
    return val.trim();
  }
}


function closingIndexForOpeningTag(data: string, i: number): { data: string, index: number} {
  let attrBoundary;
  let tagExp = "";
  for (let index = i; index < data.length; index++) {
    let ch = data[index];
    if (attrBoundary) {
        if (ch === attrBoundary) attrBoundary = ""; //reset
    } else if (ch === '"' || ch === "'") {
        attrBoundary = ch;
    } else if (ch === '>') {
        return {
          index,
          data: tagExp
        }
    } else if (ch === '\t') {
      ch = " "
    }
    tagExp += ch;
  }

  throw new Error('Tag not closed');
}


function buildAttributesMap(attrStr: string): AttributeMap | undefined {
  attrStr = attrStr.replace(/\r?\n/g, ' ');

  const attrsRegx = new RegExp('([^\\s=]+)\\s*(=\\s*([\'"])(.*?)\\3)?', 'g');
  const matches = getAllMatches(attrStr, attrsRegx);
  const len = matches.length;
  if (len === 0) { return; }
  const attrs: AttributeMap = {};
  for (let i = 0; i < len; i++) {
    const attrName = matches[i][1];
    if (attrName.length) {
      const namePrefix = '@_';
      if (matches[i][4] !== undefined) {
        matches[i][4] = matches[i][4].trim();
        attrs[namePrefix + attrName] = matches[i][4];
      }
    }
  }
  return attrs;
}


function getAllMatches(string: string, regex: RegExp): string[][] {
  const matches: string[][] = [];
  let match = regex.exec(string);
  while (match) {
    const allmatches: string[] = [];
    const len = match.length;
    for (let index = 0; index < len; index++) {
      allmatches.push(match[index]);
    }
    matches.push(allmatches);
    match = regex.exec(string);
  }
  return matches;
}
