//gets json object from php file, assigns values to html id
$(function(){
    //take current url
    let currentUrl = window.location.href;
    let splitUrl = currentUrl.split("?");
    let targetId = document.getElementById(splitUrl[1]);
    console.log(targetId);
    switch(targetId){
        case "beyondMyself":
            console.log(targetId);
            $("#sermonTitle").html("Beyond Myself: Faith Hope Live");
            $("#bookBox").attr("src", "https://drive.google.com/file/d/1nvNQ1oXZQ3JVIMQ3QiQACglIl4go4b8e/preview");
            break;
        default:
            $("#sermonTitle").html("Beyond Myself: Faith Hope Live");
            $("#bookBox").attr("src", "https://drive.google.com/file/d/1nvNQ1oXZQ3JVIMQ3QiQACglIl4go4b8e/preview");
            break;
    }
});