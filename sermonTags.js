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
        $("#allTags").append('<div class = "card rounded-0 col-xl-12 my-3 border-0" id = "' + trimTag + '"></div>');
        $("#" + trimTag).append('<h2 class = "card-title">' + jsArr[0]["tagName"] + '</a></h2>');
        for (let i = 0; i < $(jsArr).length; i++) {
            jsArr[i]["dateOf"] = new Date(jsArr[i]["dateOf"]);
            //check if sermon is video or text or both, then ready proper icon:
            let icons;
            if (jsArr[i]["vidLink"] && jsArr[i]["imgLink"]) {
                console.log("both");
                icons = '<i class="far fa-file-alt px-1 float-right"></i><i class="fas fa-play px-1 float-right"></i>';
            }
            else if (jsArr[i]["vidLink"]) {
                console.log("vid");
                icons = '<i class="fas fa-play px-1 float-right"></i>';
            }
            else if (jsArr[i]["imgLink"]) {
                console.log("text");
                icons = '<i class="far fa-file-alt px-1 float-right"></i>';
            }
            //if tag of current sermon is the same tag, append title and date
            if (jsArr[i]["tagName"].replace(/\s/g, "") == trimTag) {
                    $("#" + trimTag).append('<a href = "openSermon.html?sermonId=' + jsArr[i]["sermonId"] + '" class = "text-dark text-decoration-none"><div class = "card rounded-0 y-1 bg-light border-0" id = "' + trimTag + i + '"><div class = "card-body hovElement"></div></div></a>');
                    //if sermon has a title, append ELSE display placeholder
                    if (jsArr[i]["title"]) {
                        $("#" + trimTag + i).children("div.card-body").append('<h4 class = "card-title text-primary">' + jsArr[i]["title"] + icons + '</h4>');
                    }
                    else {
                        $("#" + trimTag + i).children("div.card-body").append('<h4 class = "card-title text-primary">Unarchived Sermon Title' + icons + '</h4>');
                    } 
                    $("#" + trimTag + i).children("div.card-body").append('<p class = "card-text text-muted">' + jsArr[i]["dateOf"].toLocaleDateString('en-US', options) + "</p>");
            }
            //else change trimTag to new tag, make new div, append current sermon info
            else {
                trimTag = jsArr[i]["tagName"].replace(/\s/g, "");
                $("#" + lastTag).after('<div class = "card rounded-0 col-xl-12 my-3 border-0 divYear" id = "' + trimTag + '"></div>');
                $("#" + trimTag).append('<h2 class = "card-title">' + jsArr[i]["tagName"] + "</h2>")
                $("#" + trimTag).append('<a href = "openSermon.html?sermonId=' + jsArr[i]["sermonId"] + '" class = "text-dark text-decoration-none"><div class = "card rounded-0 my-1 bg-light border-0" id = "' + trimTag + i + '"><div class = "card-body hovElement"></div></div></a>');
                //if sermon has a title, append ELSE display placeholder
                if (jsArr[i]["title"]) {
                    $("#" + trimTag + i).children("div.card-body").append('<h4 class = "card-title text-primary">' + jsArr[i]["title"] + icons + '</h4>');
                }
                else {
                    $("#" + trimTag + i).children("div.card-body").append('<h4 class = "card-title text-primary">Unarchived Sermon Title' + icons + '</h4>');
                } 
                $("#" + trimTag + i).children("div.card-body").append('<p class = "card-text text-muted">' + jsArr[i]["dateOf"].toLocaleDateString('en-US', options) + "</p>");
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