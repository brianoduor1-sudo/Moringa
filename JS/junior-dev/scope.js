// Step 1
let name = "Oluoch";

// Step 2
function sayMyName() {

    // Step 3
    let name = "Brian";
    console.log(`Name: ${name}, Line: ${9}`);

    // Step 4
    if (true) {
        console.log(`Name: ${name}, Line: ${13}`);

        // Step 5
        let name = "Oduor";
        console.log(`Name: ${name}, Line: ${17}`);
    }

    // Step 6
    console.log(`Name: ${name}, Line: ${21}`);
}

// Call the function
//sayMyName();

// Step 7
// Uncomment the code below to see the error

/*
let name = "Brian";
let name = "Oduor";
*/
//Answers

//Step 3
//Question: Which value is printed, "Oluoch" or "Brian"? Why?

//Answer:
//Maggy is printed because the local variable name declared inside the function shadows (hides) the global variable name.

//Step 4
//Question: Which name is printed? Why?

//Answer:
//Maggy is printed because the if block has access to variables declared in the surrounding function scope.

//Step 5
//Question: Which name is printed now? Why?

//Answer:
//Delilah is printed because a new name variable is declared inside the if block. This block-scoped variable shadows the function-scoped name within that block.

//Step 6
//Question: Which value is printed? Why isn't "Oduor" available here?

//Answer:
//Maggy is printed because Oduor is block-scoped. Variables declared with let exist only inside the block (if) where they are declared.

//Step 7
//Question: What error does JavaScript give? Why does it happen?

//Answer:
//When you uncomment the code:

//let name = "Brian";
//let name = "Oduor";

//JavaScript gives this error:

//SyntaxError: Identifier 'name' has already been declared

//This happens because let does not allow the same variable to be declared more than once in the same scope.