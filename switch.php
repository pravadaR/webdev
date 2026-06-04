<?php
    $a=20;
    $b=10;
    $operator="*";

    switch($operator)
    {
        case"+":
            echo $a+$b;
            break;
        case"-":
            echo $a-$b;
            break;
        case"*":
        echo $a*$b;
        break;
        case"/":
        echo $a/$b;
        break;
        default:
        echo "Invalid operator.";
    }
    echo "Thank you!";
?>  