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


//定义一个接口类
var Interface = function (name, methods) {
    if (arguments.length != 2) {
        alert("Interface must have two parameters...")
    }
    this.name = name;//这个是接口的名字
    this.methods = [];//定义空数组来转载函数名
    for (var i = 0; i < methods.length; i++) {
        if (typeof  methods[i] != "string") {
            alert("method name must is String...")
        }
        else {
            this.methods.push(methods[i]);
        }

    }

};
//定义接口的一个静态方法来实现接口与实现类的检验
Interface.ensureTmplements = function (object) {
    if (arguments.length < 2) {
        alert("最少是两个参数");
        return false;
    }
    for (var i = 1; i < arguments.length; i++) {
        var inter = arguments[i];
        //如果是接口必须是Interface类型的
        if (inter.constructor != Interface) {
            throw new Error("if is Interface class must be Interface type");
        }
        //遍历函数集合并分析
        for(var j=0;j<inter.methods.length;j++){
            var method=inter.methods[j];
            //实现类中必须有方法名和接口中所有的方法名相同
            if(!object[method]||typeof object[method]!="function"){
                throw new Error("实现类并没有完全实现接口中的所有方法... ");
            }
        }

    }
};



/**
 * 1,简单工厂
 * 通过第三方的类完成松耦合的任务
 * 2.复杂工厂
 * 通过把实例化的任务交给子类来完成的用来达到松耦合的母的
 * 3，超级工厂
 * 通过eval来完成智能工厂
 */
(function () {
    var Pet = new Interface("pet", ["eat", "run", "sing", "reginster"]);
    //宠物店
    var PetShop = function () {
    };
    PetShop.prototype = {
        //出售宠物的方法
        sellPetShop: function (kind) {
            var pet;
            switch (kind) {
                case "dog":
                    pet = new Dog();
                    break;
                case "cat":
                    pet = new Cat();
                    break;
                case "pig":
                    pet = new Pig();
                    break;
                default:
                    pet = new Bird();
            }
            //验证借口
            Interface.ensureTmplements(pet, Pet);

            pet.eat();
            pet.reginster();

            return pet;
        }
    };

    //宠物的基类,需要登记和吃饭
    function BasePet() {
        this.reginster = function () {
            console.log("宠物登记...<br/>")
        };
        this.eat = function () {
            console.log("吃顿饱饭...<br/>");
        };
    }

    //实现
    function Dog() {
        Dog.superClass.constructor.call(this);
        this.run=function () {
            console.log("小狗跑步...<br/>");
        };
        this.sing=function () {
            console.log("小狗唱歌...<br/>")
        }
    }

    function Pig() {
        Pig.superClass.constructor.call(this);
        this.run=function () {
            console.log("小猪跑步...<br/>");
        };
        this.sing=function () {
            console.log("小猪唱歌...<br/>")
        }
    }


    function Cat() {
        Cat.superClass.constructor.call(this);
        this.run=function () {
            console.log("小猫跑步...<br/>");
        };
        this.sing=function () {
            console.log("小猫唱歌...<br/>")
        }
    }

    function Bird() {
        Bird.superClass.constructor.call(this);
        this.run=function () {
            console.log("小鸟跑步...<br/>");
        };
        this.sing=function () {
            console.log("小鸟唱歌...<br/>")
        }
    }

    //继承
    extend(Dog,BasePet);
    extend(Pig,BasePet);
    extend(Cat,BasePet);
    extend(Bird,BasePet);

    //pcat宠物店
    var pcatPetShop=new PetShop();
    var flowerPig=pcatPetShop.sellPetShop("pig");
    flowerPig.run();


    /**
     * 貌似很完美，但是它经不住需求的变化
     * 比如说宠物商店又进一些新品种的宠物
     * 这个时候用目前的方法必须要修改宠物商店这个类
     * 用一个简单工厂来解决
     */
    //静态工厂
    var  PetFactory={
        sellPetShop: function (kind) {
            var pet;
            switch (kind) {
                case "dog":
                    pet = new Dog();
                    break;
                case "cat":
                    pet = new Cat();
                    break;
                case "pig":
                    pet = new Pig();
                    break;
                default:
                    pet = new Bird();
            }
            //验证借口
            Interface.ensureTmplements(pet, Pet);
            return pet;
        }
    };
    //利用工厂的新宠物商店
    var PetShop2=function () {};
    PetShop2.prototype={
        sellPetShop:function (kind) {
            var pet=PetFactory.sellPetShop(kind);
            pet.eat();
            pet.reginster();
            return pet;
        }
    };
    var pcatPetShop2=new PetShop2();
    var flowercat=pcatPetShop2.sellPetShop("cat");
    flowercat.sing();

    /**
     * 貌似很完美
     * 新的需求
     * 张三的宠物店和李四的宠物店虽然都是宠物店
     * 张三主要卖哈士奇，李四主要卖鸟
     *
     */

})();