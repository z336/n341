/**************************************
 TITLE: Multi-Writes document.write						
 AUTHOR: Jon Coleman			
 CREATE DATE: 05/14/2017
 PURPOSE: innerHTML 	
***************************************/
$(document).ready(function() {

var strMessage = "I be havin brown hair <strong>and</strong> a beard matey!";
var elOutput = document.getElementById("first");
elOutput.innerHTML = strMessage; 

});