module.exports = function toReadable (number) {
    let a,b,c, general_Number, 
  intermediate_Number1, intermediate_Number2, intermediate_Number3;
  function oneoperation(x){
    switch(x){
       case 1: intermediate_Number3 = 'one' ;
           break;
       case 2: intermediate_Number3 = 'two';
           break;
       case 3: intermediate_Number3 = 'three';
           break;
       case 4: intermediate_Number3 = 'four';
           break;
       case 5: intermediate_Number3 = 'five';
           break;
       case 6: intermediate_Number3 = 'six';
           break;
       case 7: intermediate_Number3 = 'seven';
           break;
       case 8: intermediate_Number3 = 'eight';
           break;
       case 9: intermediate_Number3 = 'nine';
           break;
       case 0: intermediate_Number3 = 'zero';
           break;
     }
     return(intermediate_Number3);
  }
  function two(y){
    switch(y){
       case 2: intermediate_Number3 = 'twenty';
           break;
       case 3: intermediate_Number3 = 'thirty';
           break;
       case 4: intermediate_Number3 = 'forty';
           break;
       case 5: intermediate_Number3 = 'fifty';
           break;
       case 6: intermediate_Number3 = 'sixty';
           break;
       case 7: intermediate_Number3 = 'seventy';
           break;
       case 8: intermediate_Number3 = 'eighty';
           break;
       case 9: intermediate_Number3 = 'ninety';
           break;
     }
     return(intermediate_Number3);
  }   
  function three(z){
      let cNumber = String(z)[1];
      let bNumber = String(z)[0];
      if (z < 20){
      switch(z){
        case 10: general_Number = 'ten';
             break;
         case 11: general_Number = 'eleven';
             break;
         case 12: general_Number = 'twelve';
             break;
         case 13: general_Number = 'thirteen';
             break;
         case 14: general_Number = 'fourteen';
             break;
         case 15: general_Number = 'fifteen';
             break;
         case 16: general_Number = 'sixteen';
             break;
         case 17: general_Number = 'seventeen';
             break;
         case 18: general_Number = 'eighteen';
             break;
         case 19: general_Number = 'nineteen';
             break;                        
      }       
      } else if (cNumber == 0){
          
          general_Number = two(Number(bNumber));
        } else {
            general_Number = two(Number(bNumber)) + " " + oneoperation(Number(cNumber));
        }
      intermediate_Number2 = general_Number;     
      return intermediate_Number2 ;
  }


  if (String(number).length == 1){
         
         general_Number = oneoperation(number);
         return general_Number;
  }
  
  else if (String(number).length == 2) {
      
           general_Number = three(number);
           return general_Number;  
  }


  else if (String(number).length == 3){
      let cNumber = String(number)[2];
      let bNumber = String(number)[1];
      let aNumber = String(number)[0];
      let bcNumber = Number (bNumber + cNumber);
      if (bNumber !=0){
        general_Number = oneoperation(Number(aNumber)) + " hundred " + three(bcNumber);
        return general_Number;
      } else if (bNumber == 0 && cNumber ==0) {
        general_Number = oneoperation(Number(aNumber)) + " hundred";
        return general_Number;
      } else {
          general_Number = oneoperation(Number(aNumber)) + " hundred " + oneoperation(Number(cNumber));
          return general_Number;
      } 

      
  }

}
