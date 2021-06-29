import res = require("./模块-导出exports1");
const {ZipCodeValidator:Zip,numberRegexp} = res;
// Some samples to try
let strings = ["Hello", "98052", "101"];

// Validators to use
let validator = new Zip();

console.log(numberRegexp)
// Show whether each string passed each validator
strings.forEach(s => {
    console.log(`"${ s }" - ${ validator.isAcceptable(s) ? "matches" : "does not match" }`);
});