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
$sql = "SELECT Sermons.title, Sermons.dateOf, Sermons.sermonId, tags.tagName, tags.tagId, SermonsTags.tagId, SermonsTags.sermonId
INNER JOIN Sermons.sermonId ON SermonsTags.sermonId, tags.tagId ON SermonsTags.tagId
ORDER BY tagId";
$result = $link->query($sql);
$test = mysqli_fetch_all($result, MYSQLI_ASSOC);

if (!empty($test)){
    echo json_encode($test);
}
else{
    echo json_encode([]);
}
?>
