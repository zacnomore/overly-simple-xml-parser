import {getTraversalObj, convertToJson } from "./parser";
import { IOptions } from "./models";

export function parse(xmlData: string, options: IOptions) {
  const traversableObj = getTraversalObj(xmlData);
  return convertToJson(traversableObj, options);
}