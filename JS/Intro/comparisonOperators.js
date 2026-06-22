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
    /*
     > greater than a>b
     < less than a<b
     >= greater than or equal to a>=b
     <= less than or equal to a<=b*/

let numb4=20;
let numb5=40

let str1="c"
let str2="b"

console.log(`numb4=${numb4} and numb5=${numb5}`)
console.log(`str1=${str1} and str2=${str2}`)

console.log(`numb4>numb5 ${numb4>numb5}`)
console.log(`str1>str2 ${str1>str2}`)

console.log(`numb4<numb5 ${numb4<numb5}`)
console.log(`str1<str2 ${str1<str2}`)

console.log(`numb4>=numb5 ${numb4>=numb5}`)
console.log(`str1>=str2 ${str1>=str2}`)

console.log(`numb4<=numb5 ${numb4<=numb5}`)
console.log(`str1<=str2 ${str1<=str2}`)