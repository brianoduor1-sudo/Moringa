/*
 1. Named Function:
 2.
 Anonymous Function: <without a name>
     -> a function can be assigned to variable
     -> a variable can reference a function
*/
function areaCircle(r) {
  return 3.142*r*r; // area of a functiom
 
}

let age = 23;
let samsAge = age; // age= 23
let ac = areaCircle

console.log(ac)


function areaTriangle(b,h) {
 return 0.5*b*h
}
let olu=areaTriangle

let olu=function areaTriangle(b,h) {
    return 0.5*b*h}

let olu=(b,h) => {  //you replace the function with this =>
    return 0.5*b*h}





