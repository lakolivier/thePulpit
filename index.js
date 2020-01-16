//gets json object from php file, assigns values to html id
$(function(){
    $.get("hitData.php", function(jsonObj) {
        //convert json to js object
        var jsObj = JSON.parse(jsonObj);
        //if title then assign title
        if (jsObj.title) {
            $("#sermonTitle").html(jsObj.title);
        }
        if (jsObj.verse) {
            $("#sermonVerse").html(jsObj.verse);
        }
        if (jsObj.dateOf) {
            $("#sermonDate").html(jsObj.dateOf);
        }
        if (jsObj.vidLink) {
            $("#sermonVid").html(jsObj.vidLink);
        }
        //loop this until numImgs is exhausted
        let suffix = 'a';
        let sermonText = [];
        for (let i = 0; i < jsObj.numImgs; i++){
            //plug image links into array w/ suffixes
            sermonText[i] = $('<img src = "images/scans/' + jsObj.imgLink + suffix + '.jpg" id = "img' + suffix + '">');
            //create flex objects to hold images
            let column = '<div class = "sermonCol" id = "sermonCol' + suffix + '"></div>';
            //add flex objects to container, then append images to flex objects
            $(".sermonFlex").append(column);
            $("#sermonCol" + suffix).append(sermonText[i]);
            /*if ($("img").attr("width") > 2000) {
                $("#sermonCol" + suffix).css("display", "none");
            }*/
            //log width attribute of each image, flex grow stopped working?
            if ($("#img" + suffix)[0].naturalWidth > 2000) {
                $("#sermonCol" + suffix).css("flex-grow", "4");
            }
            //increment suffix char
            suffix = String.fromCharCode(suffix.charCodeAt(0) + 1);
        }
    });
});