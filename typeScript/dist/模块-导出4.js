"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ParseIntBasedZipCodeValidator {
    isAcceptable(s) {
        return s.length === 5 && parseInt(s).toString() === s;
    }
}
exports.ParseIntBasedZipCodeValidator = ParseIntBasedZipCodeValidator;
// 导出原先的验证器但做了重命名
var _____2_1 = require("./\u6A21\u5757-\u5BFC\u51FA2");
exports.RegExpBasedZipCodeValidator = _____2_1.ZipCodeValidator;
