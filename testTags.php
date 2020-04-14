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
$sql = "SELECT s.title, s.dateOf, s.sermonId, s.vidLink, s.imgLink, t.tagName, t.tagId, st.tagId, st.sermonId 
FROM Sermons AS s
INNER JOIN SermonsTags AS st ON st.sermonId = s.sermonId
INNER JOIN tags AS t ON t.tagId = st.tagId
ORDER BY t.tagName";
$result = $link->query($sql);
$assoc = mysqli_fetch_all($result, MYSQLI_ASSOC);
//loop through to add all tags to sermons
$stags = [];
$testData =  array(
    'tagName' => 'test',
    'tagName' => 'test',
    'tagName' => 'test'
);
/*
foreach ($assoc as $sermon){
    if ($stags["sermonId"] == $sermon["sermonId"]){
        $stags = $sermon["tagName"];
    }
    else{
        $stags["sermonId"] = $sermon["sermonId"];
        $stags = $sermon["tagName"];
    }
    echo $stags;
}
*/
foreach ($assoc as $sermon){
    $thisSermon = $sermon["sermonId"];
    if (in_array($thisSermon, $stags)){
        array_push($stags[$thisSermon], $sermon["tagId"]);
    }
    else{
        $stags["sermonId"] = $thisSermon;
        array_push($stags[$thisSermon], $sermon["tagId"]);
    }
}
echo json_encode($stags);
/* appearance of stags:
stags[sermonId][sermonTag]
first check the array for $sermons's sermon
if it's "new" to stags then place it in stags[sermonId],
and place tags in stags[sermonId][tagName]
if it's been seen before just place tags in [sermonId][tagName]*/
/*
if (!empty($assoc)){
    echo json_encode($assoc);
}
else{
    echo json_encode([]);
}*/
?>

