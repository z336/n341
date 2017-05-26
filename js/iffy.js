/**************************************
 TITLE: Iffy programming						
 AUTHOR: Jon Coleman			
 CREATE DATE: 05/21/2017
 PURPOSE: If statements	
***************************************/
$(document).ready(function() {

    var strQuestion = prompt("Did ye make it to the port on time?", "Yes");

    if (strQuestion.toUpperCase() === "YES") {
        document.getElementById("iffy").textContent =
            "Alrighty! You've earned extra dabloons!";
    } else {
        document.getElementById("iffy").textContent = "Walk that plank!";
    }

});






