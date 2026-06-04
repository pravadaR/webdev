<?php
    $marks=65;
    if($marks>90) {
            echo"Excellent";
    } elseif ($marks>80)
    {
        echo"A";
    }elseif ($marks>70)
    {
        echo"B";
    }elseif($marks>60)
    {
        echo"C";
    }elseif($marks>50)
    {
        echo"D";
    }elseif($marks>40)
    {
        echo"E";
    }else{
        echo "Fail";
    }
    echo "Thank you!";
?>