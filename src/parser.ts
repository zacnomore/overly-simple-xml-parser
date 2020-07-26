export class XmlNode {
  public child = {};
  public attrsMap = {};

  constructor(public tagname: string, public parent, public val) {}

  addChild(child) {
    if (Array.isArray(this.child[child.tagname])) {
      //already presents
      this.child[child.tagname].push(child);
    } else {
      this.child[child.tagname] = [child];
    }
  }
}

export function parse(xmlData: string) {
  const traversableObj = getTraversalObj(xmlData);
  return convertToJson(traversableObj);
}

export function convertToJson(node: XmlNode): { [key: string]: object | any[]} {
  const jObj = {};

  const isEmptyObject = (obj) => Object.keys(obj).length === 0;
  //when no child node or attr is present
  if ((!node.child || isEmptyObject(node.child)) && (!node.attrsMap || isEmptyObject(node.attrsMap))) {
    return isExist(node.val) ? node.val : '';
  } else {
    //otherwise create a textnode if node has some text
    if (isExist(node.val)) {
      if (!(typeof node.val === 'string' && (node.val === '' || node.val === '\\c'))) {
        jObj['#text'] = node.val;
      }
    }
  }

  Object.assign(jObj, node.attrsMap);

  Object.keys(node.child).forEach(key => {
    if (node.child[key] && node.child[key].length > 1) {
      jObj[key] = [];
      for (var tag in node.child[key]) {
        jObj[key].push(convertToJson(node.child[key][tag]));
      }
    } else {
      jObj[key] = convertToJson(node.child[key][0]);
    }
  });

  //add value
  return jObj;
}

 function isExist(v): boolean {
  return typeof v !== 'undefined';
}


export function getTraversalObj(xmlData: string): XmlNode {
  xmlData = xmlData.replace(/(\r\n)|\n/, " ");
  const xmlObj = new XmlNode('!xml', undefined, undefined);
  let currentNode = xmlObj;
  let textData: string = "";

// function match(xmlData) {
  for(let i = 0; i < xmlData.length; i++) {
    const ch = xmlData[i];
    if(ch === '<') {
      if( xmlData[i+1] === '/') {//Closing Tag
        const closeIndex = findClosingIndex(xmlData, ">", i, "Closing Tag is not closed.")
        let tagName = xmlData.substring(i + 2, closeIndex).trim();

        if(currentNode) {
          if(currentNode.val) {
            currentNode.val = getValue(currentNode.val) + '' + processTagValue(textData);
          } else{
            currentNode.val = processTagValue(textData);
          }
        }
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
        let tagExp = result.data;
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

        if(tagExp.length > 0 && tagExp.lastIndexOf("/") === tagExp.length - 1) {//selfClosing tag

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

function getValue(v) {
  if (isExist(v)) {
    return v;
  } else {
    return '';
  }
}

function processTagValue(val) {
  if (val) {
    val = val.trim();
    val = parseValue(val, true);
  }

  return val;
}


function parseValue(val: string, shouldParse: boolean): number | string | boolean {
  if (shouldParse) {
    let parsed: number | string | boolean;
    if (val.trim() === '') {
      parsed = val === 'true' ? true : val === 'false' ? false : val;
    } else {
      if (val.indexOf('0x') !== -1) {
        //support hexa decimal
        parsed = parseInt(val, 16);
      } else if (val.indexOf('.') !== -1 && !isNaN(parseFloat(val))) {
        parsed = parseFloat(val);
        val = val.replace(/\.?0+$/, "");
      } else if (!isNaN(parseInt(val))) {
        parsed = parseInt(val, 10);
      } else {
        parsed = val;
      }
    }
    return parsed;
  } else {
    if (isExist(val)) {
      return val;
    } else {
      return '';
    }
  }
}


function closingIndexForOpeningTag(data: string, i: number) {
  let attrBoundary;
  let tagExp = "";
  for (let index = i; index < data.length; index++) {
    let ch = data[index];
    if (attrBoundary) {
        if (ch === attrBoundary) attrBoundary = "";//reset
    } else if (ch === '"' || ch === "'") {
        attrBoundary = ch;
    } else if (ch === '>') {
        return {
          data: tagExp,
          index: index
        }
    } else if (ch === '\t') {
      ch = " "
    }
    tagExp += ch;
  }
}


function buildAttributesMap(attrStr: string): { [key: string]: string | number | boolean} {
  attrStr = attrStr.replace(/\r?\n/g, ' ');

  const attrsRegx = new RegExp('([^\\s=]+)\\s*(=\\s*([\'"])(.*?)\\3)?', 'g');
  const matches = getAllMatches(attrStr, attrsRegx);
  const len = matches.length;
  if (len === 0) { return; }
  const attrs = {};
  for (let i = 0; i < len; i++) {
    const attrName = matches[i][1];
    if (attrName.length) {
      const namePrefix = '@_';
      if (matches[i][4] !== undefined) {
        matches[i][4] = matches[i][4].trim();
        attrs[namePrefix + attrName] = parseValue(
          matches[i][4],
          false
        );
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
