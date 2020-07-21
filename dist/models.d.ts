export interface IOptions {
    attrNodeName?: false;
    ignoreNameSpace?: false;
    allowBooleanAttributes?: false;
    parseNodeValue?: true;
    parseAttributeValue?: false;
    trimValues?: true;
    cdataTagName?: false;
    cdataPositionChar?: '\\c';
    tagValueProcessor?: (a: any, tagName: any) => unknown;
    attrValueProcessor?: (a: any, attrName: any) => unknown;
}
