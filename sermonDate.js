//gets json object from php file, assigns values to html ids
$(function() {
    $.get("sermonDate.php", function(jsonObj) {
        //configure options for toLocaleDateString
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        options.timeZone = "UTC";
        //convert json to js object
        var jsArr = JSON.parse(jsonObj);
        //select ALL from database in php file, then convert to big ol' json object, then loop thru to display.
        let holdDate = new Date(jsArr[0]["dateOf"]).getUTCFullYear();
        let lastDate = holdDate;
        $("#allYears").append('<div class = "card rounded-0 col-xl-12 my-3 border-0 divYear" id = "' + holdDate + '"></div>');
        $("#" + holdDate).append('<h2 class = "card-title">' + holdDate + "</h2>");
        for (let i = 0; i < $(jsArr).length; i++) {
            jsArr[i]["dateOf"] = new Date(jsArr[i]["dateOf"]);
            //if year of current sermon is the same year, append title and date
            if (jsArr[i]["dateOf"].getUTCFullYear() == holdDate) {
                    $("#" + holdDate).append('<a href = "openSermon.html?sermonId=' + jsArr[i]["sermonId"] + '" class = "text-decoration-none"><div class = "card rounded-0 my-1 bg-light border-0 position-relative" id = "' + holdDate + i + '"><div class = "card-body hovElement"></div></div></a>');
                    //if sermon has a title, append ELSE display placeholder
                    if (jsArr[i]["title"]) {
                        $("#" + holdDate + i).children("div.card-body").append('<h4 class = "card-title text-primary">' + jsArr[i]["title"] + '</h4>');
                    }
                    else {
                        $("#" + holdDate + i).children("div.card-body").append('<h4 class = "card-title text-primary">Unarchived Sermon Title</h4>');
                    }
                    $("#" + holdDate + i).children("div.card-body").append('<p class = "card-text text-muted">' + jsArr[i]["dateOf"].toLocaleDateString('en-US', options) + "</p>");
                    $("#" + holdDate + i).children("div.card-body").append('<i class="far fa-file-alt" style = "bottom: 50%; left: 25%"></i>');
            }
            //else change holdDate to new year, make new div, append current sermon info
            else {
                holdDate = jsArr[i]["dateOf"].getUTCFullYear();
                $("#" + lastDate).after('<div class = "card rounded-0 col-xl-12 my-3 border-0 divYear" id = "' + holdDate + '"></div>');
                $("#" + holdDate).append('<h2 class = "card-title">' + holdDate + "</h2>")
                $("#" + holdDate).append('<a href = "openSermon.html?sermonId=' + jsArr[i]["sermonId"] + '" class = "text-decoration-none"><div class = "card rounded-0 my-1 bg-light border-0" id = "' + holdDate + i + '"><div class = "card-body hovElement position-relative"></div></div></a>');
                //if sermon has a title, append ELSE display placeholder
                if (jsArr[i]["title"]) {
                    $("#" + holdDate + i).children("div.card-body").append('<h4 class = "card-title text-primary">' + jsArr[i]["title"] + '</h4>');
                }
                else {
                    $("#" + holdDate + i).children("div.card-body").append('<h4 class = "card-title text-primary">Unarchived Sermon Title</a></h4>');
                }                
                $("#" + holdDate + i).children("div.card-body").append('<p class = "card-text text-muted">' + jsArr[i]["dateOf"].toLocaleDateString('en-US', options) + "</p>");
                lastDate = holdDate;    
            }
        }
    //scrolls page to element selected
    let currentUrl = window.location.href;
    let splitUrl = currentUrl.split("#");
    let targetId = document.getElementById(splitUrl[1]);
    targetId.scrollIntoView();
    });
});