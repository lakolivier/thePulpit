$(function() {
    $.get("index2.php", function(jsonObj) {
        //convert json to js object
        var jsArr = JSON.parse(jsonObj);
        $(".jumbotron").after('<div class = "card-columns"></div>');
        //CHANGE scope of this forloop after plugging in database
        for (let i = 0; i < $(jsArr).length; i++) {
            $(".card-columns").append('<div class = "card bg-light border-0" id = "' + i + '"></div>');
            $("#" + i).append('<div class = "card-body p-3"></div>');
            $("#" + i).children("div.card-body").append('<h4 class = "card-title">' + jsArr[i]["title"] + '</h4>');
            $("#" + i).children("div.card-body").append('<div class = "text-muted">' + jsArr[i]["dateOf"] + '</div>');
            $("#" + i).children("div.card-body").after('<img class = "card-img-bottom" src = "https://img.youtube.com/vi/' + jsArr[i]["vidLink"] + '/hqdefault.jpg">');
            //clip img source's black borders
            $(".card").children("img").css("clip-path", "polygon(12.5% 12.5%, 12.5% 87.5%, 87.5% 87.5%, 87.5% 12.5%)");
        }
    });
});