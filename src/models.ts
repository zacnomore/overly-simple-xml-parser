export class XmlNode {
    public child: { [key: string]: XmlNode[]} = {};
    public attrsMap?: AttributeMap;
  
    constructor(public tagname: string, public parent: XmlNode | undefined, public val: AllowedTypes) {}
  
    addChild(child: XmlNode) {
      if (Array.isArray(this.child[child.tagname])) {
        //already presents
        this.child[child.tagname].push(child);
      } else {
        this.child[child.tagname] = [child];
      }
    }
  }
  export type AllowedTypes = string | number | boolean | undefined;
  export type AttributeMap = { [key: string]: AllowedTypes };
  export type ParsedObject = { [key: string]: Object | unknown[]};