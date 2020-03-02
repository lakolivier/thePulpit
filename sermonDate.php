<?php
//login information for mysql database
$servername = "rectory.gilbowen.dreamhosters.com";
$username = "gilbowen";
$password = "!bowen19";
$dbname = "rectory6";
//start connection
$link = new mysqli ($servername, $username, $password, $dbname);
echo $link;
//check connection
if($link -> connect_error){
    die("Connection failed: " . $link -> connect_error);
}
//select from db REQUIRES INPUT OF SERMONID
$sql = "SELECT title, dateOf, sermonId FROM Sermons ORDER BY dateOf";
$result = $link->query($sql);
echo $result;
$test = mysqli_fetch_all($result, MYSQLI_ASSOC);
echo $test;
/*
$result = [
    "title" => "Who Are The Powerful?",
    //THIS NEEDS TO BE PASSED AS STRING, NOT DATE
    "dateOf" => "1995-12-17",
];
$result2 = [
    "title" => "The Three Rs of Real Faith",
    "dateOf" => "1995-12-10",
];
$result3 = [
    "title" => "Salvation in Self-forgetfulness",
    "dateOf" => "1998-04-15",
];

$array = [];
$array[] = $result;
$array[] = $result2;
$array[] = $result3;
*/

if (!empty($test)){
    echo json_encode($test);
}
else{
    echo json_encode([]);
}
?>
