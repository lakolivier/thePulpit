//gets json object from php file, assigns values to html ids
$(function() {
    $.get("justDate.php", function(jsonObj) {
        //convert json to js object
        var jsArr = JSON.parse(jsonObj);
        //select ALL from database in php file, then convert to big ol' json object, then loop thru to display.
        let holdDate = new Date(jsArr[0]["YEAR(dateOf)"]).getUTCFullYear();
        let lastDate = holdDate;
        $("#allYears").append('<div class = "card bg-white shadow-sm rounded-0 col-md-4 border-0 p-0 my-3" id = "' + holdDate + '"></div>');
        $("#" + holdDate).append('<a href = "sermonDate.html#' + holdDate + '" class = "text-decoration-none"><h2 class = "card-title hovElement m-0 px-3 py-1">' + holdDate + "</h2></a>");
        for (let i = 1; i < $(jsArr).length; i++) {
            jsArr[i]["YEAR(dateOf)"] = new Date(jsArr[i]["YEAR(dateOf)"]);
            let holdDate = jsArr[i]["YEAR(dateOf)"].getUTCFullYear();
            $("#" + lastDate).after('<div class = "card bg-white shadow-sm rounded-0 col-md-4 border-0 p-0 my-3" id = "' + holdDate + '"></div>');
            $("#" + holdDate).append('<a href = "sermonDate.html#' + holdDate + '" class = "text-decoration-none"><h2 class = "card-title hovElement m-0 px-3 py-1">' + holdDate + "</h2></a>");
            lastDate = holdDate;
        }
    });
});