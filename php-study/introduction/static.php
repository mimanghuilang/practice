<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<?php

function myTest() {
  static $x=0;
  echo $x."<br/>";
  $x++;
}

myTest();
myTest();
myTest();

?>
</body>
</html>