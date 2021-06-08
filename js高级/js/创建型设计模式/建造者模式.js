var Human = function (param) {
    this.skill = param && param.skill || '保密';
    this.hobby = param && param.hobby || '保密'
}
Human.prototype = {
    getSkill:function () {
        return this.skill
    },
    getHobby:function () {
        return this.hobby
    }
}
var Named = function (name) {
    var that = this;
    (function (name,that) {
        that.wholeName = name;
        if(name.indexOf(' ')>-1){
            that.FirstName = name.slice(0,name.indexOf(' '));
        }
        that.secondName = name.slice(name.indexOf(' '));
    })(name,that)
}
var Work = function (work) {
    var that = this;
    (function (work,that) {
        switch (work) {
            case 'code':
                that.work = '工程师';
                that.workDesc = '每天沉醉于编程';
                break;
            case 'UI':
                that.work = '设计';
                that.workDesc = '每天沉醉于美术';
                break;
            case 'teacher':
                that.work = '教师';
                that.workDesc='分享快乐';
                break;
            default:
                that.work = work;
                that.workDesc='暂无此职业'
                break
        }
    })(work,that)
}
Work.prototype.changeWork = function (work) {
    this.work = work;
}
Work.prototype.changeDesc = function (desc) {
    this.workDesc = desc;
}

// 使用
var Person = function (name,work) {
    var _person = new Human();
    _person.name = new Named(name);
    _person.work = new Work(work)
    return _person
}

var person = new Person('Li Ming','code');
console.log(person)