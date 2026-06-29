/* 
Function allow you to write reusable bits of code 
To use Dry(Do not repeat your self) by using code block

/{/code block/}
// syntax:
// function <name: variable name convection> (<parameters>){/code block/}
// Big rule import rule.
 -> a function executes only when called.
 -> calling a function is telling the
 function to do its work.
 */
/*
create a simple function that when you call it, it alerts you on the current time */
function timeAlert() {
    const date = new date();
    alert(`time stamp: ${date.toISOString()}`);
    
}
/*
call a function use thefunction name then
()-> brackets
 */
//timeAlert(); // calling a function

/*
Area of a triangle
0.5*l*w
*/

// base= undefined , height = undefined
function areaofTriangle(base, height)
  
  {
    console.log(`base, base is ${base}its type ${typeof base}`);
     console.log(`height, height is ${height}its type ${typeof height}`);
     const area= 0.5 * base* height
     console.log(`For triangle with base ${base} and height${height} area is ${area}`)
}
 alert(`areaofTriangle: ${areaofTriangle()}`);