<?php
/*
//login information for mysql database
$servername = "localhost";
$username = "gilbowen";
$password = "!bowen19";
$dbname = "theRectory";
//start connection
$conn = new mysqli ($servername, $username, $password, $dbname);
//check connection
if($conn -> connect_error){
    die("Connection failed: " . $conn -> connect_error);
}
//select from db REQUIRES INPUT OF SERMONID
$sql = "SELECT title, verse, dateOf, vidLink, imgLink, numImgs FROM Sermons";
$result = $conn -> query($sql);
//returns json object assigned value
*/
//make sure to ORDER BY date in select statement.

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

echo json_encode($array);
?>
