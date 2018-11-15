<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<?php
$cars=array("Volvo","BMW","SAAB");
echo "I like " . $cars[0] . ", " . $cars[1] . " and " . $cars[2] . ".";
echo "<br/>";
echo count($cars)."<br/>";

//关联数组
$age=array("Bill"=>"35","Steve"=>"37","Peter"=>"43");
echo "Peter is " . $age['Peter'] . " years old.<br/>";


//遍历关联数组
foreach($age as $x=>$x_value) {
  echo "Key=" . $x . ", Value=" . $x_value;
  echo "<br>";
}
?>
</body>
</html>