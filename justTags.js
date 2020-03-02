$(function() {
    $.get("justTags.php", function(jsonObj) {
        //convert json to js object
        var jsArr = JSON.parse(jsonObj);
        $("#allTags").append('<div class = "card col-8 my-3 border-0 mx-auto" id = "' + jsArr[0]["tagName"] + '"></div>');
        $("#" + jsArr[0]["tagName"]).append('<h2 class = "card-title margin-0 border-bottom"><a href = "sermonTags.html#' + jsArr[0]["tagName"] + '" class = "text-dark text-decoration-none">' + jsArr[0]["tagName"] + '</a></h2>');
        console.log ($(jsArr).length);
        for (let i = 1; i < $(jsArr).length; i++) {
            $("#" + jsArr[i - 1]["tagName"]).after('<div class = "card col-8 my-3 border-0 mx-auto" id = "' + jsArr[i]["tagName"] + '"></div>');
            $("#" + jsArr[i]["tagName"]).append('<h2 class = "card-title margin-0 border-bottom"><a href = "sermonTags.html#' + jsArr[i]["tagName"] + '" class = "text-dark text-decoration-none">' + jsArr[i]["tagName"] + '</a></h2>');
            console.log (i);
        }
    });
});