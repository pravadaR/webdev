<?php
$a=array("A","B","C");
    echo $a[0];
    echo $a[1];
    echo $a[2];
    echo "Thank you!";
?>

<?php
    $yearz=array("Bill"=>1993, "George"=> 2001, "Barack"=>2009);
    echo $yearz["Barack"];
?>

<?php
$students=array("Amit"=>$a, "Chirag"=>$b, "Vandana"=>$c);
echo $students["Amit"][0];
echo $students["Amit"][1];
echo $students["Amit"][2];
echo $students["Chirag"][0];
echo $students["Chirag"][1];
echo $students["Chirag"][2];
echo $students["Vandana"][0];
echo $students["Vandana"][1];
echo $students["Vandana"][2];
echo "Thank you!";  
?>

<?php
    $name="Joe";
    echo "Hello $name!\n";
    echo "Hope you are having a great time.";
?>

<?php
    $name="Joe";
    echo 'Hello' . $name . '!';
?>