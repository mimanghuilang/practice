<?php
//子类中写和父类同样的方法就是重写父类的方法
//overwrite,不允许重写用final关键字
class BaseClass
{
    public function test()
    {
        echo "BaseClass::test called\n";

    }

    public function test1()
    {
        echo "BaseClass::test1 called\n";
    }
}

class ChildClass extends BaseClass
{
//    public function test($tmp=null)
//    {
//        echo "ChildClass::test" . $tmp . " called\n";
//    }
}

$obj = new ChildClass();
$obj->test("haha");
