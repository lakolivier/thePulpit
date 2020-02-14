//gets json object from php file, assigns values to html ids
$(function() {
    $.get("justDate.php", function(jsonObj) {
        //convert json to js object
        var jsArr = JSON.parse(jsonObj);
        //basically plan: select ALL from database in php file, then convert to big ol' json object, then loop thru to display.
        let holdDate = new Date(jsArr[0]["YEAR(dateOf)"]).getFullYear();
        let lastDate = holdDate;
        $("nav").after('<div class = "container" id = "allYears"></div>');
        $("#allYears").append('<div class = "card col-xl-12 my-3 border-0 divYear" id = "' + holdDate + '"></div>');
        $("#" + holdDate).append('<h2 class = "card-title"><a href = "sermonDate.html#'+ holdDate + '" class = "text-decoration-none">' + holdDate + "</a></h2>");
        for (let i = 0; i < $(jsArr).length; i++) {
            jsArr[i]["YEAR(dateOf)"] = new Date(jsArr[i]["YEAR(dateOf)"]);
            holdDate = jsArr[i]["YEAR(dateOf)"].getFullYear();
            $("#" + lastDate).after('<div class = "card col-xl-12 my-3 border-0 divYear" id = "' + holdDate + '"></div>');
            $("#" + holdDate).append('<h2 class = "card-title"><a href = "sermonDate.html#'+ holdDate + '" class = "text-decoration-none">' + holdDate + "</a></h2>");
            lastDate = holdDate;
        
        }
    });
});