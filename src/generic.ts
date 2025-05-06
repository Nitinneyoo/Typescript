class keyValuePair<K,V> {
  constructor(public key: K, public value: V) {

  }
}
let pair = new keyValuePair<string,number>("1", 2);

let pair2 = new keyValuePair<number,string>(2, "3");
let pair3 = new keyValuePair<number,number>(2, 3);
let pair4 = new keyValuePair<string,string>("2", "3");
let pair5 = new keyValuePair<string,boolean>("2", true);
let pair6 = new keyValuePair<string,object>("2", {name: "2"});
let pair7 = new keyValuePair<string,any>("2", {name: "2"});

console.log(pair.key, pair.value);
console.log(pair2.key, pair2.value);

// biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
class ArrayUtils {
  static wrapInArray<T>(value: T) {
    return [value];
  }
  
  static wrapInArrayMultiple<T>(...values: T[]) {
    return values;
  }
}
let numbers = ArrayUtils.wrapInArray(1);