declare class XmlNode {
    tagname: string;
    parent: XmlNode | undefined;
    val: AllowedTypes;
    child: {
        [key: string]: XmlNode[];
    };
    attrsMap?: AttributeMap;
    constructor(tagname: string, parent: XmlNode | undefined, val: AllowedTypes);
    addChild(child: XmlNode): void;
}
type AllowedTypes = string | number | boolean | undefined;
type AttributeMap = {
    [key: string]: AllowedTypes;
};
type ParsedObject = {
    [key: string]: Object | unknown[];
};
declare function parse(xmlData: string): string | number | boolean | ParsedObject | undefined;
declare function convertToJson(node: XmlNode): ParsedObject | AllowedTypes;
declare function getTraversalObj(xmlData: string): XmlNode;
export { parse, convertToJson, getTraversalObj };
