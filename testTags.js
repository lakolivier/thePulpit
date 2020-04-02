$(function() {
    $.get("sermonTags.php", function(jsonObj) {
        var jsArr = JSON.parse(jsonObj);
        document.write(jsArr);
    });
});