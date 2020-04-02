$(function() {
    $.get("sermonTags.php", function(jsonObj) {
        document.write(jsonObj);
    });
});