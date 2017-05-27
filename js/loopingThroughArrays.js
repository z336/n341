/**************************************
 TITLE: Looping through Arrays						
 AUTHOR: Jon Coleman			
 CREATE DATE: 05/21/2017
 PURPOSE: Loops	
***************************************/

$(document).ready(function() {

	var chrCharacter = prompt("Give me yer code", "L");

	while (chrCharacter.length !== 1) {
		alert("That ain't the code, it's one character!");
		chrCharacter = prompt("Give me yer code", "L");
	} 
	

        /*****          
        Purpose: Used to assign ascii value of the entered character to a variable          
        Parameters: single character / letter       
        Return: integer representing an ascii value
        *****/
        function parseAscii(chrCharacter) {
            intAscii = chrCharacter.charCodeAt(0);
            return intAscii;
        }

        /*****          
        Purpose: *** For full credit, describe the purpose of this function here ***            
        Parameters: single integer representing an ascii value  
        Return: binary, base 2 representation of the number passed to this function
        *****/
        function parseBin(intAscii) {
            strBin = parseInt(intAscii, 10).toString(2);
            if (strBin.length < 8) {
                var intPlaceHolders = 8 - strBin.length;
                for (var i = 0; i < intPlaceHolders; i++) {
                    strBin = "0" + strBin;
                }

            }

            return strBin;
        }

 




document.getElementById("loop").textContent = "codes";


});

