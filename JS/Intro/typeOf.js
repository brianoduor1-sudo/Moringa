/*
the type of is just to tell you the variable type
->number
->string
->boolen
->null
->undefined
*/

let numb1=749
console.log("numb1 ",numb1,"Its type is",typeof numb1)
let strNumb="854"
console.log("strNumb ",strNumb,"Its type is ",typeof strNumb)
let myName="John"
console.log('My name is ',myName," Its type is ",typeof myName)
let isMarried=true
console.log("isMarried ",isMarried,"ITs type is ",typeof isMarried)
let nullVal=null//type of <null> object ->
console.log("nullVal ",nullVal,"Its type is ",typeof nullVal)
let unValue;
console.log("unValue ",unValue,"ITs type is",typeof unValue)

const bonus="200"
const salary=70000

const salaryGross=bonus+salary; 

//console.log(salaryGross) !-> more information
console.log("Gross salary is",salaryGross) // ->more helpful
//Tax calculation
const paye=salaryGross*0.16
console.log("For Gross Salary",salaryGross,"Paye is",paye)
//->
const nhif=2500
console.log("Nhif deduction",nhif)
const sha=2500
console.log("SHA is", sha)
const totalDeductions=paye+nhif+sha
console.log("Total Deduction are",totalDeductions)
const netsalary=salaryGross-totalDeductions
console.log("Your net salary is ",netsalary)