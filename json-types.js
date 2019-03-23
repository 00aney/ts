export type JSONValue =
  | string
  | number
  | boolean
  | null
  | JSONObject
  | JSONArray;
export interface JSONArray extends Array<JSONValue> {}
export interface JSONObject {
  [k: string]: JSONValue;
}

//non object stuff
const str: JSONValue = "hello";
const num: JSONValue = 5;
const f: JSONValue = false;
const t: JSONValue = true;
const n: JSONValue = null;

const arr: JSONValue = ["", 1, false];
const arr2: JSONValue = ["", 1, () => false]; //error
const obj: JSONValue = {
  a: "a"
};

const badobj: JSONValue = { //error
  a() {}
};
