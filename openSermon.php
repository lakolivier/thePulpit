<?php
//login information for mysql database
$servername = "rectory.gilbowen.dreamhosters.com";
$username = "gilbowen";
$password = "!bowen19";
$dbname = "rectory6";
//start connection
$link = new mysqli ($servername, $username, $password, $dbname);
//check connection
if($link -> connect_error){
    die("Connection failed: " . $link -> connect_error);
}
//get variables from url using http _get
$retrieveId = $_GET['sermonId'];
//select from db REQUIRES INPUT OF SERMONID
$sql = "SELECT title, verse, dateOf, vidLink, imgLink, numImgs FROM Sermons WHERE sermonId = $retrieveId";
$result = $link->query($sql);
$test = mysqli_fetch_all($result, MYSQLI_ASSOC);

/*
//returns json object assigned value
$result = [
    "title" => "The Power of Hope",
    "verse" => "John 5: 1-9",
    "dateOf" => "1994-02-06",
    "vidLink" => "CiOil1_VBUU",
    "imgLink" => "Feb6_94",
    "numImgs" => 3
];
*/

if (!empty($test)){
    echo json_encode($test[0]);
}
else{
    echo json_encode([]);
}
?>