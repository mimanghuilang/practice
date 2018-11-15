<?php

/**
 * 面向对象的接口
 * interface 定义接口
 * 接口里面的方法不需要有方法的实现
 * implements关键字用于表示实现某个类的接口
 *created by jm
 */
interface ICanEat
{
    public function eat($food);

    public function dance($dance);
}

interface  ICanPee extends ICanEat
{
    public function pee( $animal );
}

//实现 implements
class Human implements ICanEat
{
    public function eat($food)
    {
        echo "Human eating $food\n";
    }

    public function dance($dance)
    {
        echo "Human dance $dance\n";
    }
}
class Human1 implements  ICanPee{
    public function eat($food)
    {
        echo "Human eating $food\n";
    }

    public function dance($dance)
    {
        echo "Human dance $dance\n";
    }

    public function pee($animal=null)
    {
        echo "I pee $animal\n";
    }
}


Class Animal implements ICanEat
{
    public function eat($food)
    {
        echo "animal eating {$food}\n";
    }

    public function dance($dance)
    {
        echo "animal dance $dance\n";
    }
}

function XX(ICanEat $canEat)
{
    echo $canEat->dance("天空步");
    echo $canEat->eat("fish");
    echo $canEat->dance("太空步");
}

$obj = new Human1();
var_dump($obj instanceof ICanEat);
$obj->eat("apple");
$obj->dance("dog");
$obj->pee("本俊");

//
XX(new Animal());
XX(new Human());

?>

