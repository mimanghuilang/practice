"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const res = require("./\u6A21\u5757-\u5BFC\u51FAexports1");
const { ZipCodeValidator: Zip, numberRegexp } = res;
// Some samples to try
let strings = ["Hello", "98052", "101"];
// Validators to use
let validator = new Zip();
console.log(numberRegexp);
// Show whether each string passed each validator
strings.forEach(s => {
    console.log(`"${s}" - ${validator.isAcceptable(s) ? "matches" : "does not match"}`);
});
