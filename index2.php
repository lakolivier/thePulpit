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
    "title" => "The Power of Hope",
    //THIS NEEDS TO BE PASSED AS STRING, NOT DATE
    "vidLink" => "CiOil1_VBUU",
    "dateOf" => "1995-12-17",
];
$result2 = [
    "title" => "The Power of Hope",
    "vidLink" => "CiOil1_VBUU",
    "dateOf" => "1995-12-17",
];
$result3 = [
    "title" => "The Power of Hope",
    "vidLink" => "CiOil1_VBUU",
    "dateOf" => "1995-12-17",
];



$array = [];
$array[] = $result;
$array[] = $result2;
$array[] = $result3;

echo json_encode($array);
?>