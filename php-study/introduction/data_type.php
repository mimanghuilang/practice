<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<?php
echo "<h1>字符串</h1>";
$x = "Hello world!";
echo $x;
echo "<br>";
$x = 'Hello world!';
echo $x;
?>




<?php
echo "<h1>整数</h1>";
$x = 5985;
var_dump($x);
echo "<br>";
$x = -345; // 负数
var_dump($x);
echo "<br>";
$x = 0x8C; // 十六进制数
var_dump($x);
echo "<br>";
$x = 047; // 八进制数
var_dump($x);
?>

<?php
echo "<h1>浮点数</h1>";
$x = 10.365;
var_dump($x);
echo "<br>";
$x = 2.4e3;
var_dump($x);
echo "<br>";
$x = 8E-5;
var_dump($x);
?>

<?php
echo "<h1>布尔值</h1>";
$x=true;
$y=false;
var_dump($x);
var_dump($y);
?>

<?php
echo "<h1>数组</h1>";
$cars=array("Volvo","BMW","SAAB");
var_dump($cars);
?>

<?php
echo "<h1>对象</h1>";
class Car
{
  var $color;
  function Car($color="green") {
    $this->color = $color;
  }
  function what_color() {
    return $this->color;
  }
}
?>

<?php
echo "<h1>NULL</h1>";
$x="Hello world!";
$x=null;
var_dump($x);
?>


</body>
</html>