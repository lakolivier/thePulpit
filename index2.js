$(function() {
    $.get("index2.php", function(jsonObj) {
        //convert json to js object
        var jsArr = JSON.parse(jsonObj);
        $(".jumbotron").after('<div class = "card-columns"></div>');
        //spit out the 9 sermons pulled from .get
        for (let i = 0; i < $(jsArr).length; i++) {
            $(".card-columns").append('<div class = "card bg-light border-0" id = "' + i + '"></div>');
            $("#" + i).append('<div class = "card-body p-3"></div>');
            $("#" + i).children("div.card-body").append('<h4 class = "card-title text-dark"><a href = "openSermon.html?sermonId=' + jsArr[i]["sermonId"] + '" class = "text-decoration-none">' + jsArr[i]["title"] + '</h4>');
            $("#" + i).children("div.card-body").append('<div class = "text-muted">' + jsArr[i]["dateOf"] + '</div>');
            //if there's a video file, append video thumbnail, else append sermon img a
            if (jsArr[i]["vidLink"]) {
                //when appending video thumbnail, add play icon atop it
                $("#" + i).children("div.card-body").append('<div class = "position-relative"><img class = "card-img-bottom" src = "https://img.youtube.com/vi/' + jsArr[i]["vidLink"] + '/hqdefault.jpg"><a id = "vid' + i + '" href = "openSermon.html?sermonId=' + jsArr[i]["sermonId"] + '" class = "position-absolute"><i class="fas fa-play fa-2x"></i></a></div>');
                $("#vid" + i).css({"bottom":"45%", "left":"45%"});
            }
            else {
                $("#" + i).children("div.card-body").append('<div class = "position-relative"><img class = "my-1 img-fluid card-img-bottom" src = "images/scans/' + jsArr[i]["imgLink"] + 'a.jpg"><a id = "img' + i + '" href = "openSermon.html?sermonId=' + jsArr[i]["sermonId"] + '" class = "position-absolute"><i class="fas fa-images fa-2x"></i></a></div>');
                $("#img" + i).css({"bottom":"45%", "left":"45%"});
            }
                //clip img source's black borders
            $(".card").children("img").css("clip-path", "polygon(12.5% 12.5%, 12.5% 87.5%, 87.5% 87.5%, 87.5% 12.5%)");
        }
    });
});
/*
<div class="img-download">
  <!-- image of dog -->
  <img src="https://loremflickr.com/320/240/dog" width="320" height="240" alt="dog">
  
  <!-- download icon -->
  <a href="https://loremflickr.com/320/240/dog" download="dog.jpg"><i class="fas fa-download"></i> Download</a>
</div>
*/