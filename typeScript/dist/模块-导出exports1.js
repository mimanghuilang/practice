"use strict";
let numberRegexp = /^[0-9]+$/;
class ZipCodeValidator {
    isAcceptable(s) {
        return s.length === 5 && numberRegexp.test(s);
    }
}
module.exports = {
    ZipCodeValidator,
    numberRegexp
};
