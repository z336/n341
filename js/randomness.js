/**************************************
 TITLE: Randomness						
 AUTHOR: Jon Coleman			
 CREATE DATE: 05/20/2017
 PURPOSE: Objects, properties, methods 	
***************************************/
$(document).ready(function() {

    function Pirate (rank, favorite, id) {

        this.strRank = rank;
        this.intFavoriteNumber = favorite;
        this.elOutput = document.getElementById(id); 
        
        this.randomNumber = function() {
            this.intFavoriteNumber = (Math.random() * 10) +1;
<<<<<<< HEAD
        }
        this.speak = function (whatToSay) {
            this.elOutput.innerHTML += whatToSay;
        } 
    }
=======
        } 

        this.speak = function () {
            this.elOutput.innerHTML += "<br>" + this.intFavoriteNumber;
        }

    };
>>>>>>> origin/master

    var captainPirate = new Pirate ('Captain', 7, 'captain');
    var firstMatePirate = new Pirate ('First Mate', 8, 'pirate1');
    var secondMatePirate = new Pirate ('Second Mate', 9, 'pirate2');
    var deckScrubberPirate = new Pirate ('Deck Scrubber', 4, 'pirate3');
<<<<<<< HEAD

    captainPirate.speak("Hey, we're starting the game.");
    captainPirate.randomNumber();
    alert(captainPirate.intFavoriteNumber);

    firstMatePirate.randomNumber();
    firstMatePirate.speak("Here is my rank " + firstMatePirate.strRank + " and I choose" + firstMatePirate.intFavoriteNumber + " .");

=======
>>>>>>> origin/master
    
    captainPirate.speak();
    firstMatePirate.speak();
    secondMatePirate.speak();
    deckScrubberPirate.speak();

});


