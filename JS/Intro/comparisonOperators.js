/*
Comparison operators evaluate to only true or false
 1.Equality ==
 2.Strict Equality ===
 3.Inequality !=
 4.Strict Inequality !==
 --JS--
 */

 let numb1="26"
 let numb2=26
 // string===number => false
 //numb1==numb1 -> type conversion
 let strictEqual=numb1===numb2 //Boolean
 console.log(`numb1=${numb1}===numb2=${numb2}
    Ans ${strictEqual} its type is ${typeof strictEqual}`)
let nonStrictEquality=numb1==numb2
 console.log(`numb1=${numb1}==numb2=${numb2}
    Ans ${nonStrictEquality} its type is ${typeof nonStrictEquality }`)

let val1="23"
let val2=23
// different types should be equal
//string is not equal number -> true
let strictInequality=val1!==val2
console.log(`val1=${val1}!==val2=${val2}
    Ans ${strictInequality} its type is ${typeof strictInequality}`)

let Inequality=val1!=val2
console.log(`val1=${val1}!=val2=${val2}
    Ans ${Inequality} its type is ${typeof Inequality}`)

 