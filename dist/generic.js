"use strict";
class keyValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
let pair = new keyValuePair("1", 2);
let pair2 = new keyValuePair(2, "3");
let pair3 = new keyValuePair(2, 3);
let pair4 = new keyValuePair("2", "3");
let pair5 = new keyValuePair("2", true);
let pair6 = new keyValuePair("2", { name: "2" });
let pair7 = new keyValuePair("2", { name: "2" });
console.log(pair.key, pair.value);
console.log(pair2.key, pair2.value);
class ArrayUtils {
    static wrapInArray(value) {
        return [value];
    }
    static wrapInArrayMultiple(...values) {
        return values;
    }
}
let numbers = ArrayUtils.wrapInArray(1);
//# sourceMappingURL=generic.js.map