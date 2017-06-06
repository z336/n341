/*
    Filename: ahoyJquery.js
    Written by: Jon Coleman
    Purpose: Learning jQuery
    Date: 06/05/17
    Modification History: None
    Last Modified: N/A
*/

$(document).ready(function(){

		
	alert("this alert shows the link to my js file is active");

	$('#ahoy').click(function() {
		$('p').append('<br/> Ahoy jQuery World!!!!');
	});

	$('#matey').click(function(){
		$('p').html('<br/> Ahoy ahoy!');
	});


});