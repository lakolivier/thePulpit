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

$result = [
    "title" => "Who Are The Powerful?",
    "verse" => "Philippians 2: 1-13",
    "dateOf" => "1995-12-17",
    "vidLink" => NULL,
    "imgLink" => "Dec17_95",
    "numImgs" => 3
];
$mockSermon = '{"title":"Who Are The Powerful?", "verse":"Philippians 2: 1-13", "dateOf":"1995-12-17", "vidLink":"NULL", "imgLink":"Dec17_95", "numImgs":"3"}';
//echo $mockSermon;
echo json_encode($result);
?>