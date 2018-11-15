function extend(subClass,superClass) {
    //1，叫子类原型类属性等于父类的原型属性
    //初始化一个中间空对象，为了转换注意类关系
    var F=function () {};
    F.prototype=superClass.prototype;
    //2,让子类集成F
    subClass.prototype=new F();
    subClass.prototype.constructor=subClass;
    //3,为子类添加属性superClasss
    subClass.superClass=superClass.prototype;
    //4，增加一个保险
    if(superClass.prototype.constructor==Object.prototype.constructor){
        superClass.prototype.constructor=superClass;
    }

}
