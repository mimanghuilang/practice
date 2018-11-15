<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<h1>date</h1>
<?php
//date(format,timestamp)
echo "今天是 " . date("Y/m/d") . "<br>";
echo "今天是 " . date("Y.m.d") . "<br>";
echo "今天是 " . date("Y-m-d") . "<br>";
echo "今天是 " . date("l");
echo date("Y")."<br/>";
//获得简单的时间
//下面是常用于时间的字符：
//h - 带有首位零的 12 小时小时格式
//i - 带有首位零的分钟
//s - 带有首位零的秒（00 -59）
//a - 小写的午前和午后（am 或 pm）
echo "现在时间是 ".date("h:i:sa")."<br/>";

//获得时区
date_default_timezone_set("Asia/Shanghai");
echo  "当前时间是 ".date("h:i:sa");

//通过 PHP mktime() 创建日期
$d=mktime(9, 12, 31, 6, 10, 2015);
echo "创建日期是 " . date("Y-m-d h:i:sa", $d)."<br/>";


//用字符串创建时间
$d=strtotime("10:38pm April 15 2015");
echo "创建日期是 " . date("Y-m-d h:i:sa", $d)."<br/>";

$d=strtotime("tomorrow");
echo date("Y-m-d h:i:sa", $d) . "<br>";

$d=strtotime("next Saturday");
echo date("Y-m-d h:i:sa", $d) . "<br>";

$d=strtotime("+3 Months");
echo date("Y-m-d h:i:sa", $d) . "<br>";
?>
</body>
</html>