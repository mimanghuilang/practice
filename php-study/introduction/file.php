<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<?php
echo readfile("test.txt")."<br/>";


$myfile = fopen("test.txt", "r") or die("Unable to open file!");
echo fread($myfile,filesize("test.txt"));
fclose($myfile);


$myfile2 = fopen("test2.txt", "a+") or die("Unable to open file!");
$txt="本俊就是我本英俊\n";
fwrite($myfile2, $txt);
fclose($myfile2);
?>
</body>
</html>