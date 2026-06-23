/*
comparison operators
comparison operators evaluate to only true or false
*/

/*
And -> &&
true table _. all posible combinations
val1 and val2
combinations are
val1 && val2
Val2&& val1
-> for and all statements have to be true for
 it to be true
*/
let val1=true
let val2=true

let result1=val1&&val2


console.log(`val=${val1} val2=${val2} val1&&val2=${val1&&val2}`)

let oluthe_age=30
let oluthe_balance=80000

//if oluthe is age is greater than 18 and has more than 30000 in his account

//Method 1
let is_greater_than18=oluthe_age>18
console.log(`Is oluthe age greater than 18 ${is_greater_than18}`)
let has_more_than30000=oluthe_balance>30000
console.log(`oluthe has more than 30000 ${has_more_than30000}`)
console.log(`oluthe age is greater than 18 
    and has more than 30000 in his account 
    ${is_greater_than18&&has_more_than30000}`)

//oluthe_age>18&&oluthe_balance>30000
//Method 2

let simmplifed=oluthe_age>18&&oluthe_balance>30000
console.log(`simplified ${simmplifed}`)
console.log(`further simplification is ${oluthe_age>18&&oluthe_balance>30000}`)


console.log(`oluthe age is greater than 18 
    and has more than 30000 in his account 
    ${is_greater_than18||has_more_than30000}`)
    
/*
or atleast one statement has to be true for the whole statement to be true
*/
console.log(`This is not true = ${!true}`)
console.log(`This is not false = ${!false}`)

    