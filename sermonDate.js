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
        $("#allYears").append('<div class = "card rounded-0 col-xl-12 my-3 border-0 bg-light" id = "' + holdDate + '"></div>');
        $("#" + holdDate).append('<h2 class = "card-title text-dark">' + holdDate + "</h2>");
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
            //if year of current sermon is the same year, append title and date
            if (jsArr[i]["dateOf"].getUTCFullYear() == holdDate) {
                    $("#" + holdDate).append('<a href = "openSermon.html?sermonId=' + jsArr[i]["sermonId"] + '" class = "text-decoration-none"><div class = "card rounded-0 my-1 bg-white border-0" id = "' + holdDate + i + '"><div class = "card-body hovElement"></div></div></a>');
                    //if sermon has a title, append ELSE display placeholder
                    if (jsArr[i]["title"]) {
                        $("#" + holdDate + i).children("div.card-body").append('<h4 class = "card-title">' + jsArr[i]["title"] + icons + '</h4>');
                    }
                    else {
                        $("#" + holdDate + i).children("div.card-body").append('<h4 class = "card-title">Unarchived Sermon Title' + icons + '</h4>');
                    }
                    $("#" + holdDate + i).children("div.card-body").append('<p class = "card-text text-muted">' + jsArr[i]["dateOf"].toLocaleDateString('en-US', options) + "</p>");
            }
            //else change holdDate to new year, make new div, append current sermon info
            else {
                holdDate = jsArr[i]["dateOf"].getUTCFullYear();
                $("#" + lastDate).after('<div class = "card rounded-0 col-xl-12 my-3 border-0 bg-light" id = "' + holdDate + '"></div>');
                $("#" + holdDate).append('<h2 class = "card-title text-dark">' + holdDate + "</h2>")
                $("#" + holdDate).append('<a href = "openSermon.html?sermonId=' + jsArr[i]["sermonId"] + '" class = "text-decoration-none"><div class = "card rounded-0 my-1 bg-white border-0" id = "' + holdDate + i + '"><div class = "card-body hovElement"></div></div></a>');
                //if sermon has a title, append ELSE display placeholder
                if (jsArr[i]["title"]) {
                    $("#" + holdDate + i).children("div.card-body").append('<h4 class = "card-title">' + jsArr[i]["title"] + icons + '</h4>');
                }
                else {
                    $("#" + holdDate + i).children("div.card-body").append('<h4 class = "card-title">Unarchived Sermon Title' + icons + '</h4>');
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