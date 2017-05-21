/**************************************
 TITLE: Conversions						
 AUTHOR: Jon Coleman			
 CREATE DATE: 05/14/2017
 PURPOSE: Variables, prompts, and concatenation 	
***************************************/

var strPirateName = "";   // pirate name variable
var strQuestion = "What be your pirate name???";  // ask their name
var strDefault = "Jumpin Jon Giantsbane";  // default pirate name
strPirateName = prompt(strQuestion, strDefault);   // prompt the question
 
var strDoubloons = "";  // gold doubloons variable
var strQuestion = "How many doubloons you plunder???";  // string that asks how much gold they've plundered
var strDefault = "500";  // default plunder 
strDoubloons = prompt(strQuestion, strDefault);  // prompt the question

intDoubloons = parseInt(strDoubloons);  // convert doubloons integer to a string
intNewDoubloons = intDoubloons * 287;  // calculate gold doubloons worth in USD
strNewDoubloons = intNewDoubloons.toString();  // convert int doubloons in USD to a string so it can print to user

alert("I, " + strPirateName + ", have plundered " + strDoubloons + " gold doubloons for a total of $" + strNewDoubloons);  // last alert displaying all info