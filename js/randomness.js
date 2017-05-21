/**************************************
 TITLE: Randomness						
 AUTHOR: Jon Coleman			
 CREATE DATE: 05/20/2017
 PURPOSE: Objects, properties, methods 	
***************************************/
$(document).ready(function() {

    function Pirate (rank, favoriteNumber, id); {

        this.rank = rank;
        this.favoriteNumber = favoriteNumber;
        this.id = id; 
        this.callFavoriteNumber = function() {
        	return this.favoriteNumber;
        }

    }

    var captainPirate = new Pirate ('Captain', 7, 'captain');
    var firstMatePirate = new Pirate ('First Mate', 8, 'pirate');
    var secondMatePirate = new Pirate ('Second Mate', 9, 'pirate');
    var deckScrubberPirate = new Pirate ('Deck Scrubber', 4, 'pirate');


});


