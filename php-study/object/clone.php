<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/11/3
 * Time: 18:01
 */
class NbaPlayer{
    public $name;
    function __clone()
    {
        $this->name="TBD";
    }
}
$james=new NbaPlayer();
$james->name="james";
echo $james->name."\n";
$james2=clone  $james;
//$james2->name="james2";
echo $james2->name;