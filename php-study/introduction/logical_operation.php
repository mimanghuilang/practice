<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<?php
$true1=true;
$true2=true;
$false1=false;
$false2=false;
var_dump( $true1 and $true2 );
echo "<br/>";
var_dump( $true1 and $false1 );
echo "<br/>";
var_dump( $true1 xor $false1 xor $false2 );
echo "<br/>";
var_dump( $false1 or $false2 );
echo "<br/>";
var_dump( $true1 and $true2 );
?>
</body>
</html>