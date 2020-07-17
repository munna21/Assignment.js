//feettoMile

function feetToMile(feet){

   var mile=feet/5280;
   return mile;
   
}
//wood calculator
function woodCalculator (table,chair,bed){


   var tablecount=table*1
   var chaircount=chair*3
   var bedcount=bed*5

   var totalwood=tablecount+chaircount+bedcount;
   return totalwood;

}


//brick calculator


//tinyFriend.

function tinyFriend(numbers){
      var tiny=numbers[0];
      for (var i=0; i<numbers.length;i++){

       var frlist=numbers[i];
       if(frlist.length<tiny.length){
          tiny=frlist;
         
         }

      }

return tiny;

}



   


