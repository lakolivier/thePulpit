//gets json object from php file, assigns values to html ids
$(function() {
    $.get("sermonDate.php", function(jsonObj) {
        //convert json to js object
        var jsArr = JSON.parse(jsonObj);
        //basically plan: select ALL from database in php file, then convert to big ol' json object, then loop thru to display.
        let holdDate = new Date(jsArr[0]["dateOf"]).getFullYear();
        let lastDate = holdDate;
        $("nav").after('<div class = "container" id = "allYears"></div>');
        $("#allYears").append('<div class = "card col-xl-12 my-3 border-0 divYear" id = "' + holdDate + '"></div>');
        $("#" + holdDate).append('<h2 class = "card-title">' + holdDate + "</h2>")
        for (let i = 0; i < $(jsArr).length; i++) {
            jsArr[i]["dateOf"] = new Date(jsArr[i]["dateOf"]);
            //if year of current sermon is the same year, append title and date
            if (jsArr[i]["dateOf"].getFullYear() == holdDate) {
                    $("#" + holdDate).append('<div class = "card my-1 bg-light border-0" id = "' + holdDate + i + '"><div class = "card-body"></div></div>');
                    $("#" + holdDate + i).children("div.card-body").append('<h4 class = "card-title text-primary"><a href = "openSermon.html?id=' + jsArr[i]["sermonId"] + '">' + jsArr[i]["title"] + '</a></h4>');
                    $("#" + holdDate + i).children("div.card-body").append('<p class = "card-text text-muted">' + jsArr[i]["dateOf"].toDateString() + "</p>");
            }
            //else change holdDate to new year, make new div, append current sermon info
            else {
                holdDate = jsArr[i]["dateOf"].getFullYear();
                $("#" + lastDate).after('<div class = "card col-xl-12 my-3 border-0 divYear" id = "' + holdDate + '"></div>');
                $("#" + holdDate).append('<h2 class = "card-title">' + holdDate + "</h2>")
                $("#" + holdDate).append('<div class = "card my-1 bg-light border-0" id = "' + holdDate + i + '"><div class = "card-body"></div></div>');
                $("#" + holdDate + i).children("div.card-body").append('<h4 class = "card-title text-primary">' + jsArr[i]["title"] + "</h4>");
                $("#" + holdDate + i).children("div.card-body").append('<p class = "card-text text-muted">' + jsArr[i]["dateOf"].toDateString() + "</p>");
                lastDate = holdDate;    
            }
        }
    });
});