/*
    Filename: moversAndShakers.js
    Written by: Jon Coleman
    Purpose: Learning jQuery
    Date: 06/14/17
*/


$(document).ready(function() {
    $("#hide").click(function() {
        $("#clickme").hide("slow", function() {

        });
    });
    $("#toggle").click(function() {
        $("p").toggle();
    });
    $("#show").click(function() {
        $("#clickme").show();
    });
    $("#slideup").click(function() {
        $("#clickme").slideUp("slow").slideDown("slow");
    });
    $("#slidedown").click(function() {
        $("#clickme").slideDown("slow").slideUp("slow");
    });
    $("#fadein").click(function() {
        $("div:hidden:first").fadeIn("slow");
    });
    $("#fadeout").click(function() {
        $(".quiet").fadeOut("slow");
    });


});
