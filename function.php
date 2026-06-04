<?php
function get_max($a, $b)
{
    if ($a>$b)
        {
            return $a;
        }
        else{
            return $b;
        }
}
     $max=get_max(5,10);
     echo $max;
?>

<?php
     $abc="Hello World";

     function a()
     {
        global $abc;
        $abc="Hey";
        echo $abc;
     }
     function b()
     {
        echo $abc;
     }

     a();
     b();
     echo $abc;
?>

<?php
    $bc="Hello World";

    function c()
    {
        $GLOBALS['abc']="Hey";
        echo $GLOBALS['abc'];
    }
    c();
    echo $abc;
?>

<?php
    function add_one($n)
    {
        $n++;
        return $n;
    }
    $num=0;
    $num=add_one($num);
    echo $num." ";
?>