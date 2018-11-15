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

    //pcat宠物店
    var pcatPetShop=new PetShop();
    var flowerPig=pcatPetShop.sellPeyShop("pig");
    flowerPig.run();


    /**
     * 貌似很完美，但是它经不住需求的变化
     * 比如说宠物商店又进一些新品种的宠物
     * 这个时候用目前的方法必须要修改宠物商店这个类
     * 用一个简单工厂来解决
     */
    //静态工厂
    var  PetFactory={
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
            return pet;
        }
    };
    //利用工厂的新宠物商店
    var PetShop2=function () {};
    PetShop2.prototype={
        sellPeyShop:function (kind) {
            var pet=PetFactory.sellPeyShop(kind);
            pet.eat();
            pet.reginster();
            return pet;
        }
    };
    var pcatPetShop2=new PetShop2();
    var flowercat=pcatPetShop2.sellPeyShop("cat");
    flowercat.sing();

    /**
     * 貌似很完美
     * 新的需求
     * 张三的宠物店和李四的宠物店虽然都是宠物店
     * 张三主要卖哈士奇，李四主要卖鸟
     *
     */

})();