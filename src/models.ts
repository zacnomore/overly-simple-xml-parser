export interface IOptions {
  attrNodeName?: false,
  ignoreNameSpace?: false,
  allowBooleanAttributes?: false,
  parseNodeValue?: true,
  parseAttributeValue?: false,
  trimValues?: true, //Trim string values of tag and attributes
  cdataTagName?: false,
  cdataPositionChar?: '\\c',
  // eslint-disable-next-line no-unused-vars
  tagValueProcessor?: (a, tagName) => unknown,
  // eslint-disable-next-line no-unused-vars
  attrValueProcessor?: (a, attrName) => unknown
  }
