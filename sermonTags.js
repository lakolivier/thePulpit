//gets json object from php file, assigns values to html ids
$(function() {
    $.get("sermonTags.php", function(jsonObj) {
        //set date options
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        options.timeZone = "UTC";
        //convert json to js object
        var jsArr = JSON.parse(jsonObj);
        //trim whitespace of tag
        jsArr[0]["dateOf"] = new Date(jsArr[0]["dateOf"]);
        let trimTag = jsArr[0]["tagName"].replace(/\s/g, "");
        let lastTag = trimTag;
        $("#allTags").append('<div class = "card col-8 my-3 border-0 mx-auto" id = "' + trimTag + '"></div>');
        $("#" + trimTag).append('<h2 class = "card-title margin-0 border-bottom"><a href = "sermonTags.html#' + trimTag + '" class = "text-dark text-decoration-none">' + jsArr[0]["tagName"] + '</a></h2>');
        for (let i = 0; i < $(jsArr).length; i++) {
            console.log("hello sir");
            jsArr[i]["dateOf"] = new Date(jsArr[i]["dateOf"]);
            trimTag = jsArr[i]["tagName"].replace(/\s/g, "");
            //if tag of current sermon is the same tag, append title and date
            if (jsArr[i]["tagName"].replace(/\s/g, "") == trimTag) {
                console.log(jsArr[i]["tagName"]);
                    $("#" + trimTag).append('<div class = "card my-1 bg-light border-0" id = "' + trimTag + i + '"><div class = "card-body"></div></div>');
                    $("#" + trimTag + i).children("div.card-body").append('<h4 class = "card-title text-primary">' + jsArr[i]["title"] + "</h4>");
                    $("#" + trimTag + i).children("div.card-body").append('<p class = "card-text text-muted">' + jsArr[i]["dateOf"].toLocaleDateString('en-US', options) + "</p>");
            }
            //else change holdDate to new year, make new div, append current sermon info
            else {
                console.log("hello else");
                trimTag = jsArr[i]["tagName"].replace(/\s/g, "");
                $("#" + lastTag).after('<div class = "card col-xl-12 my-3 border-0 divYear" id = "' + trimTag + '"></div>');
                $("#" + trimTag).append('<h2 class = "card-title">' + jsArr[i]["tagName"] + "</h2>")
                $("#" + trimTag).append('<div class = "card my-1 bg-light border-0" id = "' + trimTag + i + '"><div class = "card-body"></div></div>');
                $("#" + trimTag + i).children("div.card-body").append('<h4 class = "card-title text-primary">' + jsArr[i]["title"] + "</h4>");
                $("#" + holdDate + i).children("div.card-body").append('<p class = "card-text text-muted">' + jsArr[i]["dateOf"].toLocaleDateString('en-US', options) + "</p>");
                lastTag = trimTag;    
            }
        }
    //scrolls page to element selected
    let currentUrl = window.location.href;
    let splitUrl = currentUrl.split("#");
    let targetId = document.getElementById(splitUrl[1]);
    targetId.scrollIntoView();
    });
});