//gets json object from php file, assigns values to html ids
$(function() {
    $.get("sermonDate.php", function(jsonObj) {
        //convert json to js object
        var jsArr = JSON.parse(jsonObj);
        //basically plan: select ALL from database in php file, then convert to big ol' json object, then loop thru to display.
        let holdDate = new Date(jsArr[0]["dateOf"]).getFullYear();
        let lastDate = holdDate;
        $("nav").after('<div class = "divYear" id = "' + holdDate + '"></div>');
        $("#" + holdDate).append("<h2>" + holdDate + "</h2>")
        for (let i = 0; i < $(jsArr).length; i++) {
            jsArr[i]["dateOf"] = new Date(jsArr[i]["dateOf"]);
            //if year of current sermon is the same year, append title and date
            if (jsArr[i]["dateOf"].getFullYear() == holdDate) {
                    $("#" + holdDate).append("<h3>" + jsArr[i]["title"] + "</h3>");
                    $("#" + holdDate).append("<p>" + jsArr[i]["dateOf"].toDateString() + "</p>");
            }
            //else change holdDate to new year, make new div, append current sermon info
            else {
                holdDate = jsArr[i]["dateOf"].getFullYear();
                $("#" + lastDate).after('<div class = "divYear" id = "' + holdDate + '"></div>');
                $("#" + holdDate).append("<h2>" + holdDate + "</h2>")
                $("#" + holdDate).append("<h3>" + jsArr[i]["title"] + "</h3>");
                $("#" + holdDate).append("<p>" + jsArr[i]["dateOf"].toDateString() + "</p>");
                lastDate = holdDate;
            }
        }
    });
});