interface IOptions {
    attrNodeName?: false;
    ignoreNameSpace?: false;
    allowBooleanAttributes?: false;
    parseNodeValue?: true;
    parseAttributeValue?: false;
    trimValues?: true;
    cdataTagName?: false;
    cdataPositionChar?: "\\c";
    tagValueProcessor?: (a: any, tagName: any) => unknown;
    attrValueProcessor?: (a: any, attrName: any) => unknown;
}
declare function parse(xmlData: string, options?: IOptions): any;
declare function convertToJson(node: any, options?: IOptions): any;
declare function getTraversalObj(xmlData: string): any;
export { parse, convertToJson, getTraversalObj };
