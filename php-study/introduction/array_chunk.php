<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<h1>array_chunk</h1>
<?php
$cars=array("Volvo","BMW","Toyota","Honda","Mercedes","Opel");
print_r(array_chunk($cars,2));
echo "<br/>";
print_r(json_encode( array_chunk($cars,2) ));
?>


<?php
// 表示由数据库返回的可能记录集的数组
$a = array(
  array(
    'id' => 5698,
    'first_name' => 'Bill',
    'last_name' => 'Gates',
  ),
  array(
    'id' => 4767,
    'first_name' => 'Steve',
    'last_name' => 'Jobs',
  ),
  array(
    'id' => 3809,
    'first_name' => 'Mark',
    'last_name' => 'Zuckerberg',
  )
);

$last_names = array_column($a, 'last_name');
print_r( "<br/>".json_encode($last_names) );
?>


<?php
$age=array("Bill"=>"60","Steve"=>"56","Mark"=>"31");
print_r(  "<br/>".json_encode( array_change_key_case($age,CASE_UPPER) ) );
?>


<?php
$fname=array("Bill","Steve","Mark");
$age=array("60","56","31");

$c=array_combine($fname,$age);
print_r( "<br/>".json_encode($c) );
?>


<?php
$a=array("A","Cat","Dog","A","Dog");
print_r( "<br/>".json_encode( array_count_values($a) ) );
?>

<?php
$a1=array("a"=>"red","b"=>"green","c"=>"blue","d"=>"yellow");
$a2=array("e"=>"red","f"=>"green","g"=>"blue");

$result=array_diff($a1,$a2);
print_r( "<br/>".json_encode($result) );
?>


<?php
$a1=array("a"=>"red","b"=>"green","c"=>"blue","d"=>"yellow");
$a2=array("a"=>"red","b"=>"green","c"=>"blue");

$result=array_diff_assoc($a1,$a2);
print_r( "<br/>".json_encode($result) );
?>


<?php
function myfunction($a,$b)
{
if ($a===$b)
  {
  return 0;
  }
  return ($a>$b)?1:-1;
}

$a1=array("a"=>"red","b"=>"green","c"=>"blue");
$a2=array("d"=>"red","b"=>"green","e"=>"blue");

$result=array_diff_uassoc($a1,$a2,"myfunction");
print_r( "<br/>".json_encode($result) );
?>

</body>
</html>