<?php
/**
 * Created by PhpStorm.
 * 抽象类
 * User: Administrator
 * Date: 2017/11/3
 * Time: 15:59
 */
abstract class ACanEat{
    //在抽象方法前面添加abstract关键字可以标明这个方法是抽象方法，不需要具体实现
    abstract  public function eat($food);
    public function breath(){
        echo "Breath use the air.\n";
    }
}


//继承抽象类的关键字是extends
class Human extends ACanEat{
    //继承抽象类的子类需要实现抽象类中定义的抽象方法
    public function eat($food){
        echo "Human eating $food \n";
    }
}
class Animal extends ACanEat{
    public function  eat($food){
        echo "Animal eating $food \n";
    }
}

$man= new Human();
$man->eat("apple");
$man->breath();
$monkey=new Animal();
$monkey->eat("bannana");
$monkey->breath();