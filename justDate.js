//gets json object from php file, assigns values to html ids
$(function() {
    $.get("justDate.php", function(jsonObj) {
        //convert json to js object
        var jsArr = JSON.parse(jsonObj);
        //select ALL from database in php file, then convert to big ol' json object, then loop thru to display.
        let holdDate = new Date(jsArr[0]["YEAR(dateOf)"]).getUTCFullYear();
        let lastDate = holdDate;
        $("#allYears").append('<a href = "sermonDate.html#' + holdDate + '" class = "text-dark col-md-4 text-decoration-none"><div class = "card bg-light rounded-0 col-md-4 border-0 p-0 my-3" id = "' + holdDate + '"></div></a>');
        $("#" + holdDate).append('<h2 class = "card-title hovElement m-0 px-3 py-1">' + holdDate + "</h2>");
        for (let i = 1; i < $(jsArr).length; i++) {
            jsArr[i]["YEAR(dateOf)"] = new Date(jsArr[i]["YEAR(dateOf)"]);
            let holdDate = jsArr[i]["YEAR(dateOf)"].getUTCFullYear();
            $("#" + lastDate).after('<a href = "sermonDate.html#' + holdDate + '" class = "text-dark col-md-4 text-decoration-none"><div class = "card bg-light rounded-0 col-md-4 border-0 p-0 my-3" id = "' + holdDate + '"></div></a>');
            $("#" + holdDate).append('<h2 class = "card-title hovElement m-0 px-3 py-1">' + holdDate + "</h2>");
            lastDate = holdDate;
        }
    });
});