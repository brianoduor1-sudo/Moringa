/*
A recursive function is a function that calls itself.
-> since this creates an endless loop you need to find a way
to terminate. That is using a return statement and if <condition>
 */

function salaryGrossPromptProcess() {
    let gross = prompt("Enter your gross salary");
    if(isNaN(gross) === false) {

        console.log(`You entered this amount ${gross} exiting`);
        return;
    }
    alert(`Invalid gross salary entered. enter a number for gross salary. try again`);
    salaryGrossPromptProcess()
}
salaryGrossPromptProcess();


//factorial 

function factorialNumber(n) {
    if (isNaN(n) || n < 0) {
        console.log("Please enter a valid non-negative number.");
        return;
    }
}