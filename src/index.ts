import {getTraversalObj, convertToJson } from "./parser";

export function parse(xmlData: string, options) {
  const traversableObj = getTraversalObj(xmlData);
  return convertToJson(traversableObj, options);
}