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
        sellPeyShop: function (kind) {
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

    //宠物的基类
    function BasePet() {
        this.reginster = function () {
            document.write("宠物登记...<br/>")
        };
        this.eat = function () {
            document.write("吃顿饱饭...<br/>");
        };
    }

    //实现
    function Dog() {
        Dog.superClass.constructor.call(this);
        this.run=function () {
            document.write("小狗跑步...<br/>");
        };
        this.sing=function () {
            document.write("小狗唱歌...<br/>")
        }
    }

    function Pig() {
        Pig.superClass.constructor.call(this);
        this.run=function () {
            document.write("小猪跑步...<br/>");
        };
        this.sing=function () {
            document.write("小猪唱歌...<br/>")
        }
    }


    function Cat() {
        Cat.superClass.constructor.call(this);
        this.run=function () {
            document.write("小猫跑步...<br/>");
        };
        this.sing=function () {
            document.write("小猫唱歌...<br/>")
        }
    }

    function Bird() {
        Bird.superClass.constructor.call(this);
        this.run=function () {
            document.write("小鸟跑步...<br/>");
        };
        this.sing=function () {
            document.write("小鸟唱歌...<br/>")
        }
    }

    //继承
    extend(Dog,BasePet);
    extend(Pig,BasePet);
    extend(Cat,BasePet);
    extend(Bird,BasePet);

    //1,把核心的商店变成一个抽象类
    var Petshop=function () {};
    PetShop.prototype={
        sellPetShop: function (kind) {
            var pet=this.sellPetshop(kind);
            pet.eat();
            pet.reginster();
            return pet;
        },
        sellPetshop:function (model) {
            throw new Error("this is abstract class...");
        }
    };
    //2.利用子类来满足我们之间的需求（多态）；
    var OnePetShop=function () {};
   extend(OnePetShop,Petshop);
   OnePetShop.prototype.sellPetshop=function (model) {
       var pet;
       switch (model) {
           case "dog":
               pet = new Dog();
               break;
           default:
               pet = new Bird();
       }
       //验证借口
       Interface.ensureTmplements(pet, Pet);

       pet.eat();
       pet.reginster();

       return pet;
   };

    var TwoPetShop=function () {};
    extend(TwoPetShop,Petshop);
    TwoPetShop.prototype.sellPetshop=function (model) {
        var pet;
        switch (model) {
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
    };

    //实验
    var jim=new OnePetShop();
    var pig=jim.sellPetshop("dog");
    pig.run();

    var tom=new TwoPetShop();
    var mpig=tom.sellPetshop("pig");
    mpig.run();

})();