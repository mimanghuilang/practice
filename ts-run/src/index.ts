/// <reference path = "speak.ts" /> 
namespace Speak { 
    export class SpeakHello implements peopleSpeak { 
        public speakFun() { 
            console.log("Hello"); 
        }  
    }
    console.log(SpeakHello)
}
