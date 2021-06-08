var Factor = function (type,content) {
    if(this instanceof Factor){
        var s = new this[type](content)
        return s;
    }
    return new Factor(type,content)
}
Factor.prototype = {
    JAVA:function (content) {
        this.content = content
    },
    JavaScript:function (content) {
        this.content = content
    },
    UI:function (content) {
        this.content = content

    }
}
const java = Factor('JAVA','haha')
console.log(java)
console.log(java instanceof Factor)