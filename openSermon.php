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
//select from db REQUIRES INPUT OF SERMONID
/*
$test = $link -> query("SELECT * FROM Sermons");
echo json_encode($test);*/
$sql = "SELECT title, verse, dateOf, vidLink, imgLink, numImgs FROM Sermons WHERE sermonId = 1";
$result = $link->query($sql);
$test = mysqli_fetch_all($result);
//returns json object assigned value

/*
$result = [
    "title" => "The Power of Hope",
    "verse" => "John 5: 1-9",
    "dateOf" => "1994-02-06",
    "vidLink" => "CiOil1_VBUU",
    "imgLink" => "Feb6_94",
    "numImgs" => 3
];
$mockSermon = '{"title":"Who Are The Powerful?", "verse":"Philippians 2: 1-13", "dateOf":"1995-12-17", "vidLink":"NULL", "imgLink":"Dec17_95", "numImgs":"3"}';
//echo $mockSermon;*/
echo json_encode($test);
?>