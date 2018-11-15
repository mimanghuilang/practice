<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<h1>session</h1>
<?php
session_start();
// store session data
$_SESSION['views']=1;
echo "Pageviews=". $_SESSION['views'];
//清除session
unset($_SESSION['views']);
//彻底删除session
session_destroy();
?>
</body>
</html>