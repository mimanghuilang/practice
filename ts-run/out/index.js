/// <reference path = "speak.ts" /> 
var Speak;
(function (Speak) {
    class SpeakHello {
        speakFun() {
            console.log("Hello");
        }
    }
    Speak.SpeakHello = SpeakHello;
    console.log(SpeakHello);
})(Speak || (Speak = {}));
//# sourceMappingURL=index.js.map