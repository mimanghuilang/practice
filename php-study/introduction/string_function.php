<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<h1>我的第一张 PHP 页面</h1>
<?php
$string="hello world!";
echo "字符串为".$string."<br/>";
//字符串的长度
echo "字符串的长度".strlen($string)."<br/>";
//字符的位置
echo "字符串world的位置".strpos($string,"world");

?>
</body>
</html>