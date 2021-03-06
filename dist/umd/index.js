'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var XmlNode = (function () {
    function XmlNode(tagname, parent, val) {
        this.tagname = tagname;
        this.parent = parent;
        this.val = val;
        this.child = {};
    }
    XmlNode.prototype.addChild = function (child) {
        if (Array.isArray(this.child[child.tagname])) {
            this.child[child.tagname].push(child);
        }
        else {
            this.child[child.tagname] = [child];
        }
    };
    return XmlNode;
}());

function parse(xmlData) {
    var traversableObj = getTraversalObj(xmlData);
    return convertToJson(traversableObj);
}
function convertToJson(node) {
    var jObj = {};
    var isEmptyObject = function (obj) { return Object.keys(obj).length === 0; };
    if ((isEmptyObject(node.child)) && (!node.attrsMap || isEmptyObject(node.attrsMap))) {
        return isExist(node.val) ? node.val : '';
    }
    else if (isExist(node.val) && (!(typeof node.val === 'string' && (node.val === '' || node.val === '\\c')))) {
        jObj['#text'] = node.val;
    }
    Object.assign(jObj, node.attrsMap);
    Object.entries(node.child).forEach(function (_a) {
        var key = _a[0], value = _a[1];
        if (Array.isArray(value) && value.length > 1) {
            jObj[key] = [];
            for (var tag in value) {
                jObj[key].push(convertToJson(value[tag]));
            }
        }
        else {
            var jsVal = convertToJson(value[0]);
            if (jsVal) {
                jObj[key] = jsVal;
            }
        }
    });
    return jObj;
}
function isExist(v) {
    return typeof v !== 'undefined';
}
function getTraversalObj(xmlData) {
    xmlData = xmlData.replace(/(\r\n)|\n/, " ");
    var xmlObj = new XmlNode('!xml', undefined, undefined);
    var currentNode = xmlObj;
    var textData = "";
    for (var i = 0; i < xmlData.length; i++) {
        var ch = xmlData[i];
        if (ch === '<') {
            if (xmlData[i + 1] === '/') {
                var closeIndex = findClosingIndex(xmlData, ">", i, "Closing Tag is not closed.");
                if (currentNode) {
                    if (currentNode.val) {
                        currentNode.val = getValue(currentNode.val) + '' + processTagValue(textData);
                    }
                    else {
                        currentNode.val = processTagValue(textData);
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
                    currentNode.val = getValue(currentNode.val) + '' + processTagValue(textData);
                    textData = "";
                }
                currentNode.val = (currentNode.val || '') + (tagExp || '');
                i = closeIndex + 2;
            }
            else {
                var result = closingIndexForOpeningTag(xmlData, i + 1);
                var tagExp = result.data || '';
                var closeIndex = result.index;
                var separatorIndex = tagExp.indexOf(" ");
                var tagName = tagExp;
                if (separatorIndex !== -1) {
                    tagName = tagExp.substr(0, separatorIndex).replace(/\s\s*$/, '');
                    tagExp = tagExp.substr(separatorIndex + 1);
                }
                if (currentNode && textData) {
                    if (currentNode.tagname !== '!xml') {
                        currentNode.val = getValue(currentNode.val) + '' + processTagValue(textData);
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
                    var childNode = new XmlNode(tagName, currentNode, '');
                    if (tagName !== tagExp) {
                        childNode.attrsMap = buildAttributesMap(tagExp);
                    }
                    currentNode.addChild(childNode);
                }
                else {
                    var childNode = new XmlNode(tagName, currentNode, undefined);
                    if (tagName !== tagExp) {
                        childNode.attrsMap = buildAttributesMap(tagExp);
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
function processTagValue(val) {
    if (val === 'false' || val === 'true') {
        return val === 'true';
    }
    else if (val.indexOf('0x') !== -1) {
        return parseInt(val, 16);
    }
    else if (val.indexOf('.') !== -1 && !isNaN(parseFloat(val))) {
        return parseFloat(val);
    }
    else if (!isNaN(parseInt(val))) {
        return parseInt(val, 10);
    }
    else {
        return val.trim();
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
                index: index,
                data: tagExp
            };
        }
        else if (ch === '\t') {
            ch = " ";
        }
        tagExp += ch;
    }
    throw new Error('Tag not closed');
}
function buildAttributesMap(attrStr) {
    attrStr = attrStr.replace(/\r?\n/g, ' ');
    var attrsRegx = new RegExp('([^\\s=]+)\\s*(=\\s*([\'"])(.*?)\\3)?', 'g');
    var matches = getAllMatches(attrStr, attrsRegx);
    var len = matches.length;
    if (len === 0) {
        return;
    }
    var attrs = {};
    for (var i = 0; i < len; i++) {
        var attrName = matches[i][1];
        if (attrName.length) {
            var namePrefix = '@_';
            if (matches[i][4] !== undefined) {
                matches[i][4] = matches[i][4].trim();
                attrs[namePrefix + attrName] = matches[i][4];
            }
        }
    }
    return attrs;
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

exports.convertToJson = convertToJson;
exports.getTraversalObj = getTraversalObj;
exports.parse = parse;
//# sourceMappingURL=index.js.map
