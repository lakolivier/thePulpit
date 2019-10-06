console.log("I want the gentle autograph of felix hugo fraldarius.");

$(function() {
    $("nav").hide("slow");
})

$(function() {
 /*   $.ajax({url: "hitData.php", success: function(result)});*/
    $.get("hitData.php", function(data){
        alert(data);
    });
});