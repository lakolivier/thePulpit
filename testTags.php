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

foreach ($assoc as $sermon){
    $thisTag = $sermon["tagName"];
    if (in_array($sermon["tagName"], $stags)){
        array_push($stags[$thisTag], "sermonId");
        array_push($stags[$thisTag], $sermon["sermonId"]);
    }
    else{
        $stags["tagName"] = $thisTag;
        /*array_push($stags[$thisSermon]["tagId"], $sermon["tagId"]);
        $stags[$thisTag]["sermonId"] = $sermon["sermonId"];
    }
}*/
foreach ($assoc as $sermon){
    if (in_array($sermon["sermonId"], $stags)){
        $stags[$sermon["sermonId"]][] = $sermon["tagName"];
    }
    else{
        array_push($stags[], $sermon["sermonId"]);
        echo $sermon["sermonId"];
        /*$stags[] = $sermon["sermonId"];*/
        $stags[$sermon["sermonId"]][] = $sermon["tagName"];
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

