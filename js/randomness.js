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
        } 

        this.speak = function () {
            this.elOutput.innerHTML += this.intFavoriteNumber;
        }

    }

    var captainPirate = new Pirate ('Captain', 7, 'captain');
    var firstMatePirate = new Pirate ('First Mate', 8, 'pirate');
    var secondMatePirate = new Pirate ('Second Mate', 9, 'pirate');
    var deckScrubberPirate = new Pirate ('Deck Scrubber', 4, 'pirate');
    
    

});


