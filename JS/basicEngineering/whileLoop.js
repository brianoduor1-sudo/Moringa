let n = 0;
let condition = true;
// condition=> falsely: we automatically exit the loop
while(condition) {
    console.log("n is", n);
    n = n + 1
    if(n>100){
        condition = false;
    }
}
    


let n =  9
 let print = true
 while(print){
    console.log("n is > than 0",n)
    n = n+0;
    if(n>0){
        print = false
    }
 }




 function assignments() {
    let number1;
    let number2;

    // Get first number
    while (true) {
        number1 = Number(prompt("Enter the first number (greater than 1):"));

        if (!isNaN(number1) && number1 > 1) {
            break;
        }

        console.log("Invalid input! Please enter a number greater than 1.");
    }

    // Get second number
    while (true) {
        number2 = Number(prompt("Enter the second number (greater than 1):"));

        if (!isNaN(number2) && number2 > 1) {
            break;
        }

        console.log("Invalid input! Please enter a number greater than 1.");
    }

    // Call Function 2
    multiplicationTable(number1, number2);
}

// Function 2
function multiplicationTable(num1, num2) {

    // Validate parameters
    if (isNaN(num1) || isNaN(num2) || num1 <= 1 || num2 <= 1) {
        console.log("Both numbers must be greater than 1.");
        return;
    }

    let i = num1;

    // Outer while loop
    while (i >= 1) {

        let j = num2;

        // Inner while loop
        while (j >= 1) {
            console.log(`${i} * ${j} = ${i * j}`);
            j--;
        }

        console.log("------------------");

        i--;
    }
}

// Start the program
assignment()