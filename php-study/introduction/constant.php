<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<h1>我的第一张 PHP 页面</h1>
<?php
//首个参数定义常量的名称
//第二个参数定义常量的值
//可选的第三个参数规定常量名是否对大小写不敏感。默认是 false。
define("GREETING", "Welcome to W3School.com.cn!",true);
echo GREETING."<br/>";
echo greeting;
?>
</body>
</html>