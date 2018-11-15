<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<?php
//以升序对数组排序
$cars=array("Volvo","BMW","SAAB");
sort($cars);

//对数组的数据进行排序
$numbers=array(3,5,1,22,11);
sort($numbers);
var_dump( $numbers );


//降序 rsort



//关联数组升序 asort()
echo "<br/>";
$age=array("Bill"=>"35","Steve"=>"37","Peter"=>"43");
asort($age);
var_dump($age);
//其它略


?>
</body>
</html>