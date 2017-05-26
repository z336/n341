/**************************************
 TITLE: Randomness						
 AUTHOR: Jon Coleman			
 CREATE DATE: 05/20/2017
 PURPOSE: Objects, properties, methods 	
***************************************/
$(document).ready(function() {

    function Pirate (rank, favorite, id) { // Pirate object

        this.strRank = rank;
        this.intFavoriteNumber = favorite;
        this.elOutput = document.getElementById(id); 
        
        this.randomNumber = function() {
            this.intFavoriteNumber = Math.floor(Math.random() * 10) +1;

        }
        this.speak = function (whatToSay) {
            this.elOutput.innerHTML += whatToSay;
        } 

    };


    var captainPirate = new Pirate ('Captain', 7, 'captain'); // Instantiate the pirates
    var firstMatePirate = new Pirate ('First Mate', 8, 'pirate1');
    var secondMatePirate = new Pirate ('Second Mate', 9, 'pirate2');
    var deckScrubberPirate = new Pirate ('Deck Scrubber', 4, 'pirate3');


    captainPirate.speak("Hey, we're starting the game. Pick the right number to get me grog!" + "<br>");
    captainPirate.randomNumber();
    
    firstMatePirate.randomNumber();
    firstMatePirate.speak("Smith here, the " + firstMatePirate.strRank + ", and I choose " + firstMatePirate.intFavoriteNumber + ".");

    secondMatePirate.randomNumber();
    secondMatePirate.speak("Jones, " + secondMatePirate.strRank + ", and I choose " + secondMatePirate.intFavoriteNumber + ".");

    deckScrubberPirate.randomNumber();
    deckScrubberPirate.speak("The bloody " + deckScrubberPirate.strRank + " chooses " + deckScrubberPirate.intFavoriteNumber + ".");

    captainPirate.speak("I chose " + captainPirate.intFavoriteNumber + "! ");


    if (firstMatePirate.intFavoriteNumber, secondMatePirate.intFavoriteNumber, deckScrubberPirate.intFavoriteNumber === captainPirate.intFavoriteNumber) {
        captainPirate.speak("This was it!");
    } else {
        captainPirate.speak("Ya'll don't know anything!");
    }

});
