$(function() {
    $.get("testTags.php", function(jsonObj) {
        document.write(jsonObj);
    });
});