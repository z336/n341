/**************************************
 TITLE: Pick me						
 AUTHOR: Jon Coleman			
 CREATE DATE: 06/06/2017
 PURPOSE: jQuery selection 	
***************************************/

$(document).ready(function() {

var j = 1;
function createCallback(i){
  if(i == 1){
      return function f1(){         
          $('li').html( "selection by tag" );
      };
  }
  else if(i == 2){
      return function f2(){
          $("ul.the_list").children().text("selection by class");
      };
  }
  else if(i == 3){
      return function f3(){
            $('#item_'+j).html( "item "+j+" selection by id" );
          j++;
          if(j >= 10){
              j = 1;
          }
      };
  }
  else if(i == 4){
      return function f4(){
        $("#item_1").css("color", "yellow").slideUp(100).slideDown(100);
      
      };
  }
  else if(i == 5){
      return function f5(){
        $("li").filter(":even").css("color", "red").slideUp(100).slideDown(100);
      };
  }
  else if(i == 6){
      return function f6(){
        $(".the_list").filter(":even").css("color", "green").slideUp(100).slideDown(100);
      };
  }
  else if(i == 7){
      return function f7(){
          $("#item_5").filter(":even").css("color", "blue").slideUp(100).slideDown(100);
      };
  }
}

$(document).ready(function(){
    for(var i = 1; i <= 7; i++) {
        $('#button_' + i).on('click', createCallback( i ) );
    }
    
});

});