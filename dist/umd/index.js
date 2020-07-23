'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function parse(xmlData, options) {
    var traversableObj = getTraversalObj(xmlData);
    return convertToJson(traversableObj, options);
}
function convertToJson(node, options) {
    if (options === void 0) { options = {}; }
    var jObj = {};
    var isEmptyObject = function (obj) { return Object.keys(obj).length === 0; };
    if ((!node.child || isEmptyObject(node.child)) && (!node.attrsMap || isEmptyObject(node.attrsMap))) {
        return isExist(node.val) ? node.val : '';
    }
    else {
        if (isExist(node.val)) {
            if (!(typeof node.val === 'string' && (node.val === '' || node.val === options.cdataPositionChar))) {
                jObj['#text'] = node.val;
            }
        }
    }
    merge(jObj, node.attrsMap);
    Object.keys(node.child).forEach(function (key, index) {
        if (node.child[key] && node.child[key].length > 1) {
            jObj[key] = [];
            for (var tag in node.child[key]) {
                jObj[key].push(convertToJson(node.child[key][tag], options));
            }
        }
        else {
            jObj[key] = convertToJson(node.child[key][0], options);
        }
    });
    return jObj;
}
function isExist(v) {
    return typeof v !== 'undefined';
}
function merge(target, source) {
    if (source) {
        var keys = Object.keys(source);
        var len = keys.length;
        for (var i = 0; i < len; i++) {
            target[keys[i]] = source[keys[i]];
        }
    }
}
function getTraversalObj(xmlData) {
    var options = {
        attrNodeName: false,
        ignoreNameSpace: false,
        allowBooleanAttributes: false,
        parseNodeValue: true,
        parseAttributeValue: false,
        trimValues: true,
        cdataTagName: false,
        cdataPositionChar: '\\c',
        tagValueProcessor: function (a, tagName) {
            return a;
        },
        attrValueProcessor: function (a, attrName) {
            return a;
        }
    };
    xmlData = xmlData.replace(/(\r\n)|\n/, " ");
    var xmlObj = new xmlNode('!xml', undefined, undefined);
    var currentNode = xmlObj;
    var textData = "";
    for (var i = 0; i < xmlData.length; i++) {
        var ch = xmlData[i];
        if (ch === '<') {
            if (xmlData[i + 1] === '/') {
                var closeIndex = findClosingIndex(xmlData, ">", i, "Closing Tag is not closed.");
                var tagName = xmlData.substring(i + 2, closeIndex).trim();
                if (options.ignoreNameSpace) {
                    var colonIndex = tagName.indexOf(":");
                    if (colonIndex !== -1) {
                        tagName = tagName.substr(colonIndex + 1);
                    }
                }
                if (currentNode) {
                    if (currentNode.val) {
                        currentNode.val = getValue(currentNode.val) + '' + processTagValue(tagName, textData, options);
                    }
                    else {
                        currentNode.val = processTagValue(tagName, textData, options);
                    }
                }
                currentNode = currentNode.parent;
                textData = "";
                i = closeIndex;
            }
            else if (xmlData[i + 1] === '?') {
                i = findClosingIndex(xmlData, "?>", i, "Pi Tag is not closed.");
            }
            else if (xmlData.substr(i + 1, 3) === '!--') {
                i = findClosingIndex(xmlData, "-->", i, "Comment is not closed.");
            }
            else if (xmlData.substr(i + 1, 2) === '!D') {
                var closeIndex = findClosingIndex(xmlData, ">", i, "DOCTYPE is not closed.");
                var tagExp = xmlData.substring(i, closeIndex);
                if (tagExp.indexOf("[") >= 0) {
                    i = xmlData.indexOf("]>", i) + 1;
                }
                else {
                    i = closeIndex;
                }
            }
            else if (xmlData.substr(i + 1, 2) === '![') {
                var closeIndex = findClosingIndex(xmlData, "]]>", i, "CDATA is not closed.") - 2;
                var tagExp = xmlData.substring(i + 9, closeIndex);
                if (textData) {
                    currentNode.val = getValue(currentNode.val) + '' + processTagValue(currentNode.tagname, textData, options);
                    textData = "";
                }
                if (options.cdataTagName) {
                    var childNode = new xmlNode(options.cdataTagName, currentNode, tagExp);
                    currentNode.addChild(childNode);
                    currentNode.val = getValue(currentNode.val) + options.cdataPositionChar;
                    if (tagExp) {
                        childNode.val = tagExp;
                    }
                }
                else {
                    currentNode.val = (currentNode.val || '') + (tagExp || '');
                }
                i = closeIndex + 2;
            }
            else {
                var result = closingIndexForOpeningTag(xmlData, i + 1);
                var tagExp = result.data;
                var closeIndex = result.index;
                var separatorIndex = tagExp.indexOf(" ");
                var tagName = tagExp;
                if (separatorIndex !== -1) {
                    tagName = tagExp.substr(0, separatorIndex).replace(/\s\s*$/, '');
                    tagExp = tagExp.substr(separatorIndex + 1);
                }
                if (options.ignoreNameSpace) {
                    var colonIndex = tagName.indexOf(":");
                    if (colonIndex !== -1) {
                        tagName = tagName.substr(colonIndex + 1);
                    }
                }
                if (currentNode && textData) {
                    if (currentNode.tagname !== '!xml') {
                        currentNode.val = getValue(currentNode.val) + '' + processTagValue(currentNode.tagname, textData, options);
                    }
                }
                if (tagExp.length > 0 && tagExp.lastIndexOf("/") === tagExp.length - 1) {
                    if (tagName[tagName.length - 1] === "/") {
                        tagName = tagName.substr(0, tagName.length - 1);
                        tagExp = tagName;
                    }
                    else {
                        tagExp = tagExp.substr(0, tagExp.length - 1);
                    }
                    var childNode = new xmlNode(tagName, currentNode, '');
                    if (tagName !== tagExp) {
                        childNode.attrsMap = buildAttributesMap(tagExp, options);
                    }
                    currentNode.addChild(childNode);
                }
                else {
                    var childNode = new xmlNode(tagName, currentNode, undefined);
                    if (tagName !== tagExp) {
                        childNode.attrsMap = buildAttributesMap(tagExp, options);
                    }
                    currentNode.addChild(childNode);
                    currentNode = childNode;
                }
                textData = "";
                i = closeIndex;
            }
        }
        else {
            textData += xmlData[i];
        }
    }
    return xmlObj;
}
function xmlNode(tagname, parent, val) {
    this.tagname = tagname;
    this.parent = parent;
    this.child = {};
    this.attrsMap = {};
    this.val = val;
    this.addChild = function (child) {
        if (Array.isArray(this.child[child.tagname])) {
            this.child[child.tagname].push(child);
        }
        else {
            this.child[child.tagname] = [child];
        }
    };
}
function findClosingIndex(xmlData, str, i, errMsg) {
    var closingIndex = xmlData.indexOf(str, i);
    if (closingIndex === -1) {
        throw new Error(errMsg);
    }
    else {
        return closingIndex + str.length - 1;
    }
}
function getValue(v) {
    if (isExist(v)) {
        return v;
    }
    else {
        return '';
    }
}
function processTagValue(tagName, val, options) {
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
        var parsed = void 0;
        if (val.trim() === '') {
            parsed = val === 'true' ? true : val === 'false' ? false : val;
        }
        else {
            if (val.indexOf('0x') !== -1) {
                parsed = parseInt(val, 16);
            }
            else if (val.indexOf('.') !== -1) {
                parsed = parseFloat(val);
                val = val.replace(/\.?0+$/, "");
            }
            else {
                parsed = parseInt(val, 10);
            }
        }
        return parsed;
    }
    else {
        if (isExist(val)) {
            return val;
        }
        else {
            return '';
        }
    }
}
function closingIndexForOpeningTag(data, i) {
    var attrBoundary;
    var tagExp = "";
    for (var index = i; index < data.length; index++) {
        var ch = data[index];
        if (attrBoundary) {
            if (ch === attrBoundary)
                attrBoundary = "";
        }
        else if (ch === '"' || ch === "'") {
            attrBoundary = ch;
        }
        else if (ch === '>') {
            return {
                data: tagExp,
                index: index
            };
        }
        else if (ch === '\t') {
            ch = " ";
        }
        tagExp += ch;
    }
}
function buildAttributesMap(attrStr, options) {
    if (typeof attrStr === 'string') {
        attrStr = attrStr.replace(/\r?\n/g, ' ');
        var attrsRegx = new RegExp('([^\\s=]+)\\s*(=\\s*([\'"])(.*?)\\3)?', 'g');
        var matches = getAllMatches(attrStr, attrsRegx);
        var len = matches.length;
        if (len === 0) {
            return;
        }
        var attrs = {};
        for (var i = 0; i < len; i++) {
            var attrName = resolveNameSpace(matches[i][1], options);
            if (attrName.length) {
                var namePrefix = '@_';
                if (matches[i][4] !== undefined) {
                    if (options.trimValues) {
                        matches[i][4] = matches[i][4].trim();
                    }
                    matches[i][4] = options.attrValueProcessor(matches[i][4], attrName);
                    attrs[namePrefix + attrName] = parseValue(matches[i][4], options.parseAttributeValue);
                }
                else if (options.allowBooleanAttributes) {
                    attrs[namePrefix + attrName] = true;
                }
            }
        }
        return attrs;
    }
}
function getAllMatches(string, regex) {
    var matches = [];
    var match = regex.exec(string);
    while (match) {
        var allmatches = [];
        var len = match.length;
        for (var index = 0; index < len; index++) {
            allmatches.push(match[index]);
        }
        matches.push(allmatches);
        match = regex.exec(string);
    }
    return matches;
}
function resolveNameSpace(tagname, options) {
    if (options.ignoreNameSpace) {
        var tags = tagname.split(':');
        var prefix = tagname.charAt(0) === '/' ? '/' : '';
        if (tags[0] === 'xmlns') {
            return '';
        }
        if (tags.length === 2) {
            tagname = prefix + tags[1];
        }
    }
    return tagname;
}

exports.convertToJson = convertToJson;
exports.getTraversalObj = getTraversalObj;
exports.parse = parse;
//# sourceMappingURL=index.js.map
