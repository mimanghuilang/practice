import {StringValidator} from './模块-导出1'
import {numberRegexp} from './模块-导出2'
class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string) {
        return s.length === 5 && numberRegexp.test(s);
    }
}
export { ZipCodeValidator };
// 对导出部分重命名
export { ZipCodeValidator as mainValidator };