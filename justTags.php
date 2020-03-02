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
//select from db
$sql = "SELECT tagId, tagName FROM tags ORDER BY tagName";
$result = $link->query($sql);
$test = mysqli_fetch_all($result, MYSQLI_ASSOC);
//if pulled data then echo to js file
if (!empty($test)){
    echo json_encode($test);
}
else{
    echo json_encode([]);
}
?>
