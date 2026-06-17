let number1=43; //real number
console.log(number1)
let number2=53.46; // floting number
console. log(number2)
let number3=-34 // negative number
console.log(number3)
//biggest number 1.7983456945822145892 x  10^308

/* strings-> store sequence of character
3 ways of creating a string
   1.Double quote string
   2.Single quote string
   3.Back Ticks:<Template string
    */
   /* special -> \t > tab
      newline -> \n
      single quote escape-> \'
      double quote escape-> \"
       */
let str1="Double quote I am Oduor"// double quotes
console.log(str1);
let str2='Single Quote I am Oduor'// single quotes
console.log(str2);
let str3=`Back Tick I am Oduor`//Back Ticks
/* Boolean represent true or false */
let johnisMale=true //true value
console.log(johnisMale)
let johnisMarried=false
console.log(johnisMarried)


/* 
Null -> lack of a value
ie absence of a value

*/

let nullVal1=null
console.log(nullVal1)

/* 
Undefined -> lack of a value ie absence of a value what is the difference between undefined and null
***--> never explicitly set something to undefined 
if you want to create a variable that does not have a value never use undefined use null
 */


let undefinedVal1=undefined // dont do this
console.log(undefinedVal1)//undefined
let undefinedVal2; // js engine set to undefined
console.log(undefinedVal2)//undefined