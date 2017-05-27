/**************************************
 TITLE: Looping through Arrays						
 AUTHOR: Jon Coleman			
 CREATE DATE: 05/21/2017
 PURPOSE: Loops	
***************************************/

$(document).ready(function() {

    var msg = "";
	var strCode = prompt("Give me yer code", "L");
    
    while (strCode.length > 1) {
    	msg = alert("too big");
    	break;
    }
    document.getElementById("loop").textContent = "password";
    


});

