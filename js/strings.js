/**************************************
 TITLE: Strings							
 AUTHOR: Jon Coleman			
 CREATE DATE: 5/30/2017
 PURPOSE: Strings 		
***************************************/

$(document).ready(function() {

    var strName = prompt("Who be the queen's lover?", "Jumpin Jon Goldenbonez");

    var ships = [];
    ships.push(strName.charAt(0));
    ships.push(strName.indexOf(1));
    ships.push(strName.substring(0, 2));
    ships.push(strName.trim());
    ships.push(strName.replace('a', 'z'));
    ships.push(strName.toUpperCase());
    ships.push(strName.toLowerCase());
    ships.push(strName.split(" "));
    ships.push(strName.charAt(2));
    ships.push(strName.indexOf(0));
    ships.push(strName.substring(2, 4));
    ships.push(strName.substring(5, strName.length));

    $("#appendHere").append('<ul id=list></ul>');

    for (var i = 0; i < ships.length; i++) {

        $("#list").append('<li id=item' + i.toString() + '>' + ships[i] + '</li>');
    }

});
