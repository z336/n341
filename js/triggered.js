/**************************************
 TITLE: Triggered						
 AUTHOR: Jon Coleman			
 CREATE DATE: 06/09/2017
 PURPOSE: jQuery events
***************************************/

$(document).ready(function() {

    var x = 0;

    $(window).resize(function() {
        $('span').text(x += 1);
    });

    $('#target').keypress(function() {
        $('p').append('<br/> Ahoy!!!!!!!!!');
    });

    $("#mouse").dblclick(function() {
        $(this).hide();
    });


});
