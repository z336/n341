/**************************************
 TITLE: Functions						
 AUTHOR: Jon Coleman			
 CREATE DATE: 05/14/2017
 PURPOSE: Functions and scope	
***************************************/
$(document).ready(function() {


    alert("The battle has begun!"); 

    battle(10, "second"); 
    attack(9, "second");
    destroy(1, "second");
    attackAgain(2, "second");
    takeDamage(3, "second");
    retreat(5, "second");

function battle (time, second) { alert("We are battlin");
    	var stringToPrint = new String("We rode down that ship for " + time + " minutes. ");
    	var elementToAddTextTo = document.getElementById(second); 
    	elementToAddTextTo.textContent += stringToPrint }

function attack (shots, second) { alert("Shots fired!");
    	var stringToPrint = new String("We fired " + shots + " shots. ");
    	var elementToAddTextTo = document.getElementById(second); 
    	elementToAddTextTo.textContent += stringToPrint }

function destroy (deck, second) { alert("Destroying decks!");
    	var stringToPrint = new String("We destroyed " + deck + " of their decks. ");
    	var elementToAddTextTo = document.getElementById(second); 
    	elementToAddTextTo.textContent += stringToPrint }

function attackAgain (sails, second) { alert("We are attacking again!");
    	var stringToPrint = new String("So we attacked again and destroyed " + sails + " sails. ");
    	var elementToAddTextTo = document.getElementById(second); 
    	elementToAddTextTo.textContent += stringToPrint }

function takeDamage (mates, second) { alert("But we're also taking damage!");
    	var stringToPrint = new String("But we got hit and lost " + mates + " mates. ");
    	var elementToAddTextTo = document.getElementById(second); 
    	elementToAddTextTo.textContent += stringToPrint }

function retreat (oars, second) { alert("Time to retreat!");
    	var stringToPrint = new String("We also lost " + oars + " oars! So we retreated! ");
    	var elementToAddTextTo = document.getElementById(second); 
    	elementToAddTextTo.textContent += stringToPrint }


});

