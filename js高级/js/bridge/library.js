/**
 * 我们自己的类库
 */
function addEvent(obj, type, fn) {
    if (obj.addEventListener) {
        obj.addEventListener(type, fn, false);
    }
    else if (obj.attachEvent) {
        obj.attachEvent("on" + type, fn);
    }
    else {
        obj["e" + type + fn] = fn;
        obj["on" + type] = fn;
        obj[type + fn] = fn;
    }
}
