//gets json object from php file, assigns values to html id
$(function(){
    //take current url split off value pair
    let currentUrl = window.location.href;
    let splitUrl = currentUrl.split("=");
    //display reading based on passed value
    switch(splitUrl[1]){
        case "beyondMyself":
            $("#sermonTitle").html("Beyond Myself: Faith Hope Live");
            $("#bookBox").attr("src", "https://drive.google.com/file/d/1nvNQ1oXZQ3JVIMQ3QiQACglIl4go4b8e/preview");
            break;
        case "xmasPoems":
            $("#sermonTitle").html("Christmas Poems");
            $("#bookBox").attr("src", "https://drive.google.com/file/d/1rg7lmW8OHbR7BBev8I7pMo4HYrwArS_n/preview");
            $("#bookBox").after('<div class = "embed-responsive embed-responsive-16by9"><iframe id = "bookBox2" src = "https://drive.google.com/file/d/1l7iAvCtgOpSFe_hIkY9ZUvlvMLB1A2ul/preview" width=100% height=auto></iframe></div>');
            break;
        case "wayToGo":
            $("#sermonTitle").html("The Way To Go: Ten Commandments For Today");
            $("#bookBox").attr("src", "https://drive.google.com/file/d/1cDV6eqIC9KfJeal9OMe2mhZBrcAmKhom/preview");
            break;
            case "thoughts":
                $("#sermonTitle").html("Thoughts In Passing");
                $("#bookBox").attr("src", "https://drive.google.com/file/d/1ahCA5SAYzd63lg4fXhGhfk13q8ntY0Vw/preview");
                break;
    }
});