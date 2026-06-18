

let fistname="Brian"
let secondName="Oduor"
let age=20
let address="Kiambu County"

let userDetails=fistname+" "+
secondName+" is "+age+" years old"+" he stays at "+address  
console.log(userDetails)
console.log("User details is",typeof userDetails)

//Template string use back ticks
let userDetails2=`${fistname} ${secondName} is ${age} years old and he stays at ${address}`
console.log(userDetails2)
console.log(`${fistname} ${secondName} is ${age} years old and he stays at ${address}`)