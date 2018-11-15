<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<h1>error</h1>
<?php
if(!file_exists("welcome.txt"))
 {
 die("File not found");
 }
else
 {
 $file=fopen("welcome.txt","r");
 }

//创建自定义错误处理器
//error_function(error_level,error_message,error_file,error_line,error_context)

参数	描述
//error_level
//必需。为用户定义的错误规定错误报告级别。必须是一个值数。
//参见下面的表格：错误报告级别。
//error_message	必需。为用户定义的错误规定错误消息。
//error_file	可选。规定错误在其中发生的文件名。
//error_line	可选。规定错误发生的行号。
//error_context	可选。规定一个数组，包含了当错误发生时在用的每个变量以及它们的值。
?>
</body>
</html>