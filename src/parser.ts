import { IOptions } from "./models";

export function parse(xmlData: string, options?: IOptions) {
  const traversableObj = getTraversalObj(xmlData);
  return convertToJson(traversableObj, options);
}

export function convertToJson(node, options: IOptions = {}) {
  const jObj = {};

  const isEmptyObject = (obj) => Object.keys(obj).length === 0;
  //when no child node or attr is present
  if ((!node.child || isEmptyObject(node.child)) && (!node.attrsMap || isEmptyObject(node.attrsMap))) {
    return isExist(node.val) ? node.val : '';
  } else {
    //otherwise create a textnode if node has some text
    if (isExist(node.val)) {
      if (!(typeof node.val === 'string' && (node.val === '' || node.val === options.cdataPositionChar))) {
        jObj['#text'] = node.val;
      }
    }
  }

  // Switch to object.asign
  merge(jObj, node.attrsMap);

  Object.keys(node.child).forEach((key, index) => {
    if (node.child[key] && node.child[key].length > 1) {
      jObj[key] = [];
      for (var tag in node.child[key]) {
        jObj[key].push(convertToJson(node.child[key][tag], options));
      }
    } else {
      jObj[key] = convertToJson(node.child[key][0], options);
    }
  });

  //add value
  return jObj;
}

 function isExist(v) {
  return typeof v !== 'undefined';
}

function merge(target: {}, source) {
  if (source) {
    const keys = Object.keys(source); // will return an array of own properties
    const len = keys.length; //don't make it inline
    for (let i = 0; i < len; i++) {
      target[keys[i]] = source[keys[i]];
    }
  }
}


export function getTraversalObj(xmlData: string) {
  const options: IOptions = {
    attrNodeName: false,
    ignoreNameSpace: false,
    allowBooleanAttributes: false, //a tag can have attributes without any value
    //ignoreRootElement : false,
    parseNodeValue: true,
    parseAttributeValue: false,
    trimValues: true, //Trim string values of tag and attributes
    cdataTagName: false,
    cdataPositionChar: '\\c',
    // eslint-disable-next-line no-unused-vars
    tagValueProcessor: function(a, tagName) {
      return a;
    },
    // eslint-disable-next-line no-unused-vars
    attrValueProcessor: function(a, attrName) {
      return a;
    }
  };

  xmlData = xmlData.replace(/(\r\n)|\n/, " ");
  const xmlObj = new xmlNode('!xml', undefined, undefined);
  let currentNode = xmlObj;
  let textData = "";

//function match(xmlData) {
  for(let i=0; i< xmlData.length; i++) {
    const ch = xmlData[i];
    if(ch === '<') {
      if( xmlData[i+1] === '/') {//Closing Tag
        const closeIndex = findClosingIndex(xmlData, ">", i, "Closing Tag is not closed.")
        let tagName = xmlData.substring(i+2,closeIndex).trim();

        if(options.ignoreNameSpace) {
          const colonIndex = tagName.indexOf(":");
          if(colonIndex !== -1) {
            tagName = tagName.substr(colonIndex+1);
          }
        }

        if(currentNode) {
          if(currentNode.val) {
            currentNode.val = getValue(currentNode.val) + '' + processTagValue(tagName, textData , options);
          } else{
            currentNode.val = processTagValue(tagName, textData , options);
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
          currentNode.val = getValue(currentNode.val) + '' + processTagValue(currentNode.tagname, textData , options);
          textData = "";
        }

        if (options.cdataTagName) {
          //add cdata node
          const childNode = new xmlNode(options.cdataTagName, currentNode, tagExp);
          currentNode.addChild(childNode);
          //for backtracking
          currentNode.val = getValue(currentNode.val) + options.cdataPositionChar;
          //add rest value to parent node
          if (tagExp) {
            childNode.val = tagExp;
          }
        } else {
          currentNode.val = (currentNode.val || '') + (tagExp || '');
        }

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

        if(options.ignoreNameSpace) {
          const colonIndex = tagName.indexOf(":");
          if(colonIndex !== -1) {
            tagName = tagName.substr(colonIndex+1);
          }
        }

        //save text to parent node
        if (currentNode && textData) {
          if(currentNode.tagname !== '!xml') {
            currentNode.val = getValue(currentNode.val) + '' + processTagValue( currentNode.tagname, textData, options);
          }
        }

        if(tagExp.length > 0 && tagExp.lastIndexOf("/") === tagExp.length - 1) {//selfClosing tag

          if(tagName[tagName.length - 1] === "/") { //remove trailing '/'
            tagName = tagName.substr(0, tagName.length - 1);
            tagExp = tagName;
          } else{
            tagExp = tagExp.substr(0, tagExp.length - 1);
          }

          const childNode = new xmlNode(tagName, currentNode, '');
          if(tagName !== tagExp) {
            childNode.attrsMap = buildAttributesMap(tagExp, options);
          }
          currentNode.addChild(childNode);
        } else{//opening tag

          const childNode = new xmlNode( tagName, currentNode, undefined);
          if(tagName !== tagExp) {
            childNode.attrsMap = buildAttributesMap(tagExp, options);
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

function xmlNode(tagname, parent, val) {
  this.tagname = tagname;
  this.parent = parent;
  this.child = {}; //child tags
  this.attrsMap = {}; //attributes map
  this.val = val; //text only
  this.addChild = function(child) {
    if (Array.isArray(this.child[child.tagname])) {
      //already presents
      this.child[child.tagname].push(child);
    } else {
      this.child[child.tagname] = [child];
    }
  };
}

function findClosingIndex(xmlData, str, i, errMsg) {
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

function processTagValue(tagName, val, options: IOptions) {
  if (val) {
    if (options.trimValues) {
      val = val.trim();
    }
    val = options.tagValueProcessor(val, tagName);
    val = parseValue(val, options.parseNodeValue);
  }

  return val;
}


function parseValue(val, shouldParse) {
  if (shouldParse && typeof val === 'string') {
    let parsed;
    if (val.trim() === '') {
      parsed = val === 'true' ? true : val === 'false' ? false : val;
    } else {
      if (val.indexOf('0x') !== -1) {
        //support hexa decimal
        parsed = parseInt(val, 16);
      } else if (val.indexOf('.') !== -1) {
        parsed = parseFloat(val);
        val = val.replace(/\.?0+$/, "");
      } else {
        parsed = parseInt(val, 10);
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


function closingIndexForOpeningTag(data, i) {
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


function buildAttributesMap(attrStr, options: IOptions) {
  if (typeof attrStr === 'string') {
    attrStr = attrStr.replace(/\r?\n/g, ' ');

    const attrsRegx = new RegExp('([^\\s=]+)\\s*(=\\s*([\'"])(.*?)\\3)?', 'g');
    const matches = getAllMatches(attrStr, attrsRegx);
    const len = matches.length;
    if (len === 0) { return; }
    const attrs = {};
    for (let i = 0; i < len; i++) {
      const attrName = resolveNameSpace(matches[i][1], options);
      if (attrName.length) {
        const namePrefix = '@_';
        if (matches[i][4] !== undefined) {
          if (options.trimValues) {
            matches[i][4] = matches[i][4].trim();
          }
          matches[i][4] = options.attrValueProcessor(matches[i][4], attrName);
          attrs[namePrefix + attrName] = parseValue(
            matches[i][4],
            options.parseAttributeValue
          );
        } else if (options.allowBooleanAttributes) {
          attrs[namePrefix + attrName] = true;
        }
      }
    }
    return attrs;
  }
}


function getAllMatches(string, regex) {
  const matches = [];
  let match = regex.exec(string);
  while (match) {
    const allmatches = [];
    const len = match.length;
    for (let index = 0; index < len; index++) {
      allmatches.push(match[index]);
    }
    matches.push(allmatches);
    match = regex.exec(string);
  }
  return matches;
}

function resolveNameSpace(tagname, options: IOptions) {
  if (options.ignoreNameSpace) {
    const tags = tagname.split(':');
    const prefix = tagname.charAt(0) === '/' ? '/' : '';
    if (tags[0] === 'xmlns') {
      return '';
    }
    if (tags.length === 2) {
      tagname = prefix + tags[1];
    }
  }
  return tagname;
}