$(function() {
    $.get("justTags.php", function(jsonObj) {
        //convert json to js object
        var jsArr = JSON.parse(jsonObj);
        //trim whitespace of tag
        let trimTag = jsArr[0]["tagName"].replace(/\s/g, "");
        let lastTag = trimTag;
        $("#allTags").append('<div class = "card bg-light rounded-0 border-0" id = "' + trimTag + '"></div>');
        $("#" + trimTag).append('<a href = "sermonTags.html#' + trimTag + '" class = "text-dark text-decoration-none"><h2 class = "card-title m-0 px-3 py-1 hovElement">' + jsArr[0]["tagName"] + '</h2></a>');
        for (let i = 1; i < $(jsArr).length; i++) {
            trimTag = jsArr[i]["tagName"].replace(/\s/g, "");
            $("#" + lastTag).after('<div class = "card bg-light rounded-0 border-0" id = "' + trimTag + '"></div>');
            $("#" + trimTag).append('<a href = "sermonTags.html#' + trimTag + '" class = "text-dark text-decoration-none"><h2 class = "card-title m-0 px-3 py-1 hovElement">' + jsArr[i]["tagName"] + '</h2></a>');
            lastTag = trimTag;
        }
    });
});