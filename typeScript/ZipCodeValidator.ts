export const numberRegexp = /^[0-9]+$/;
export interface StringValidator {
    isAcceptable(s: string): boolean;
}
export class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string) {
        return s.length === 5 && numberRegexp.test(s);
    }
}