/*
console.log --> debugging by printing
out information in the screen
console. log-> ensure you write your consoles in such a way
that they help you figure out the issue
-> simple exercise from a gross salary
-> let calculate net salary
*/
const salaryGross=70000; //instruction
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