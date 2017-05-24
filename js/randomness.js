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
        this.strId = id; 
        
        this.randomNumber = function() {
            return (Math.random() * 10) +1;
        } 
        this.speak = function () {
            return "I am the captain and the game has started!";
        }

    }

    var captainPirate = new Pirate ('Captain', 7, 'captain');
    var firstMatePirate = new Pirate ('First Mate', 8, 'pirate');
    var secondMatePirate = new Pirate ('Second Mate', 9, 'pirate');
    var deckScrubberPirate = new Pirate ('Deck Scrubber', 4, 'pirate');
    
    var el = document.getElementById('captain'); 
    el.innerHTML = captainPirate.speak() + ' my favorite number is ' + captainPirate.intFavoriteNumber;

    var blah = captainPirate.intFavoriteNumber = captainPirate.randomNumber();
    el.innerHTML += blah;

});


