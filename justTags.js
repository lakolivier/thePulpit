$(function() {
    $.get("justTags.php", function(jsonObj) {
        //convert json to js object
        var jsArr = JSON.parse(jsonObj);
        //trim whitespace of tag
        let trimTag = jsArr[0]["tagName"].replace(/\s/g, "");
        let lastTag = trimTag;
        $("#allTags").append('<div class = "card bg-light rounded-0 border-0 text-center" id = "' + trimTag + '"></div>');
        $("#" + trimTag).append('<h2 class = "card-title"><a href = "sermonTags.html#' + trimTag + '" class = "text-dark text-decoration-none">' + jsArr[0]["tagName"] + '</a></h2>');
        for (let i = 1; i < $(jsArr).length; i++) {
            trimTag = jsArr[i]["tagName"].replace(/\s/g, "");
            $("#" + lastTag).after('<div class = "card bg-light rounded-0 border-0 text-center" id = "' + trimTag + '"></div>');
            $("#" + trimTag).append('<h2 class = "card-title"><a href = "sermonTags.html#' + trimTag + '" class = "text-dark text-decoration-none">' + jsArr[i]["tagName"] + '</a></h2>');
            lastTag = trimTag;
        }
    });
});