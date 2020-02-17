//gets json object from php file, assigns values to html ids
$(function() {
    $.get("sermonDate.php", function(jsonObj) {
        //configure options for toLocaleDateString
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        options.timeZone = "UTC";
        //convert json to js object
        var jsArr = JSON.parse(jsonObj);
        //basically plan: select ALL from database in php file, then convert to big ol' json object, then loop thru to display.
        let holdDate = new Date(jsArr[0]["dateOf"]).getUTCFullYear();
        let lastDate = holdDate;
        $("nav").after('<div class = "container" id = "allYears"></div>');
        $("#allYears").append('<div class = "card col-xl-12 my-3 border-0 divYear" id = "' + holdDate + '"></div>');
        $("#" + holdDate).append('<h2 class = "card-title">' + holdDate + "</h2>")
        for (let i = 0; i < $(jsArr).length; i++) {
            jsArr[i]["dateOf"] = new Date(jsArr[i]["dateOf"]);
            //if year of current sermon is the same year, append title and date
            if (jsArr[i]["dateOf"].getUTCFullYear() == holdDate) {
                    $("#" + holdDate).append('<div class = "card my-1 bg-light border-0" id = "' + holdDate + i + '"><div class = "card-body"></div></div>');
                    //if sermon has a title, append ELSE display placeholder
                    if (jsArr[i]["title"]) {
                        $("#" + holdDate + i).children("div.card-body").append('<h4 class = "card-title text-primary"><a href = "openSermon.html?sermonId=' + jsArr[i]["sermonId"] + '" class = "text-decoration-none">' + jsArr[i]["title"] + '</a></h4>');
                    }
                    else {
                        $("#" + holdDate + i).children("div.card-body").append('<h4 class = "card-title text-primary"><a href = "openSermon.html?sermonId=' + jsArr[i]["sermonId"] + '" class = "text-decoration-none">Unarchived Sermon Title</a></h4>');
                    }
                    $("#" + holdDate + i).children("div.card-body").append('<p class = "card-text text-muted">' + jsArr[i]["dateOf"].toLocaleDateString('en-US', options) + "</p>");
            }
            //else change holdDate to new year, make new div, append current sermon info
            else {
                holdDate = jsArr[i]["dateOf"].getUTCFullYear();
                $("#" + lastDate).after('<div class = "card col-xl-12 my-3 border-0 divYear" id = "' + holdDate + '"></div>');
                $("#" + holdDate).append('<h2 class = "card-title">' + holdDate + "</h2>")
                $("#" + holdDate).append('<div class = "card my-1 bg-light border-0" id = "' + holdDate + i + '"><div class = "card-body"></div></div>');
                //if sermon has a title, append ELSE display placeholder
                if (jsArr[i]["title"]) {
                    $("#" + holdDate + i).children("div.card-body").append('<h4 class = "card-title text-primary"><a href = "openSermon.html?sermonId=' + jsArr[i]["sermonId"] + '" class = "text-decoration-none">' + jsArr[i]["title"] + '</a></h4>');
                }
                else {
                    $("#" + holdDate + i).children("div.card-body").append('<h4 class = "card-title text-primary"><a href = "openSermon.html?sermonId=' + jsArr[i]["sermonId"] + '" class = "text-decoration-none">Unarchived Sermon Title</a></h4>');
                }                
                $("#" + holdDate + i).children("div.card-body").append('<p class = "card-text text-muted">' + jsArr[i]["dateOf"].toUTCString() + "</p>");
                lastDate = holdDate;    
            }
        }
    });
});