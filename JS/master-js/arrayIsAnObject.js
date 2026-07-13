/*
look at the differences 
between an array and an object
-> in an array keys are sequential<numbers><>
 */
/*
create an object that behaves like an array.
1. create an array give it <any name>
inside the array have two digits.
0: <any digit>
1:< any digit> 
2. create an object.<any name>
   inside the object have keys.
   0: <any digit>
   1:< any digit> 
   for the object create the length key.
   */


const ar = [20,5];
const arObj = {0: 20,
    1:5,
     push: function (newItem) {
    // this <Access object inside object> instead of using the object name
    const key = this.length; // current key
    this[key] = newItem; // element added to that key
    this.length = this.length + 1; // increment the length
  },
     length: 2,
};
console.table(ar);
console.table(arObj)