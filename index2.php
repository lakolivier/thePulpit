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
$retrieveUrl = $_GET['sermonUrl'];
//parse URL to isolate http parameters
$parsedUrl = parse_url($retrieveUrl);
$queryString = $parsedUrl["query"];
parse_str($queryString, $queryStrings);
//select from db and put into associative array
$sql = "SELECT title, dateOf, vidLink FROM Sermons WHERE sermonId = " . rand(1, count($queryStrings));
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