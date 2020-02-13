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
$sql2 = "SELECT TOP 5 title, dateOf, vidLink FROM Sermons ORDER BY NEWID()";
echo $sql2;
//$sql = "SELECT title, dateOf, vidLink FROM Sermons WHERE sermonId = " . rand(1, count($queryStrings));
$result = $link->query($sql2);
$test = mysqli_fetch_all($result, MYSQLI_ASSOC);

if (!empty($test)){
    echo json_encode($test);
}
else{
    echo json_encode([]);
}
?>
