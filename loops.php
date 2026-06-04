<?php
    $n=1;
    while($n<=5){
        echo $n*2;
        if($n==5)
            {
                break;
            }
        $n++;
    }
    echo "Thank you!";
?>

<?php
    $n=1;
    do{
        echo $n*2;
        $n++;
    }while($n<=10);
?>

<?php
    for($i=1;$i<=5;$i++){
        echo $i*2;
    }
?>

<?php
    $arr=array(2,4,6,8,10);
    foreach ($arr as $num)
        {
            echo $num." ";
        }
?>