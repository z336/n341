/**************************************
 TITLE: More Ifs						
 AUTHOR: Jon Coleman			
 CREATE DATE: 05/21/2017
 PURPOSE: If statements	
***************************************/
$(document).ready(function() {

	var intCurrentLatitude = prompt("What be your current latitude?", 30);
	var intCurrentLongitude = prompt("What be your current longitude?", 30);
	var intDestinationLatitude = prompt("What be your destination latitude?", 30);
	var intDestinationLongitude = prompt("What be your destination longitude?", 30);

if (intCurrentLatitude <= intDestinationLatitude && intCurrentLongitude <= intDestinationLongitude) {
	document.getElementById("elsifs").textContent =
            "Head North East!";
} else if (intCurrentLatitude <= intDestinationLatitude && intCurrentLongitude >= intDestinationLongitude) {
	document.getElementById("elsifs").textContent =
            "Head North West!";
} else if (intCurrentLatitude >= intDestinationLatitude && intCurrentLongitude >= intDestinationLongitude) {
	document.getElementById("elsifs").textContent = "Head South West!";
} else if (intCurrentLatitude >= intDestinationLatitude && intCurrentLongitude <= intDestinationLongitude) {
	document.getElementById("elseifs").textContent = "Head South East!";
} else {
	document.getElementById("elseifs").textContent = "Land Ho!";
}

	var msg;

switch (true) {
    case (intCurrentLatitude <= intDestinationLatitude && intCurrentLongitude <= intDestinationLongitude):
    	msg = "Head North East!";
        break;
    case (intCurrentLatitude <= intDestinationLatitude && intCurrentLongitude >= intDestinationLongitude):
        msg = "Head North West!";
        break;
    case (intCurrentLatitude >= intDestinationLatitude && intCurrentLongitude >= intDestinationLongitude):
        msg = "Head South West!";
        break;
    case (intCurrentLatitude >= intDestinationLatitude && intCurrentLongitude <= intDestinationLongitude):
        msg = "Head South East!";
        break;
    default:
        msg = "Land Ho!";
        break;
}

var el = document.getElementById("switch");
el.textContent = msg;


});