function getNumbers() {
  let number1;
  let number2;

  // Get first number
  while (true) {
    number1 = Number(prompt("Enter the first number (greater than 1):"));

    if (!isNaN(number1) && number1 > 1) {
      break;
    }

    console.log("Invalid input! Number must be greater than 1.");
  }

  // Get second number
  while (true) {
    number2 = Number(prompt("Enter the second number (greater than 1):"));

    if (!isNaN(number2) && number2 > 1) {
      break;
    }

    console.log("Invalid input! Number must be greater than 1.");
  }

  // Call second function
  createMathTable(number1, number2);
}

// Function 2: Generate multiplication table
function createMathTable(num1, num2) {

  if (num1 <= 1 || num2 <= 1) {
    console.log("Both numbers must be greater than 1.");
    return;
  }

  // Outer loop
  for (let i = num1; i >= 1; i--) {

    // Inner loop
    for (let j = num2; j >= 1; j--) {
      console.log(`${i} * ${j} = ${i * j}`);
    }

    console.log("----------------");
  }
}


getNumbers();