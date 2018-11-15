<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<?php
$x=10;
echo $x; // 输出 10

$y=20;
$y += 100;
echo $y."<br/>"; // 输出 120

$z=50;
$z -= 25;
echo $z."<br/>"; // 输出 25

$i=5;
$i *= 6;
echo $i."<br/>"; // 输出 30

$j=10;
$j /= 5;
echo $j."<br/>"; // 输出 2

$k=15;
$k %= 4;
echo $k."<br/>"; // 输出 3
?>

<?php
$x=10; 
echo ++$x; // 输出 11

$y=10;
echo $y++; // 输出 10

$z=5;
echo --$z; // 输出 4

$i=5;
echo $i--; // 输出 5
?>
</body>
</html>