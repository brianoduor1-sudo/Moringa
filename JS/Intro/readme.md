## Variables
Variable is a representation of another placeholder without changing it"s meaning.
An example is X=3 where 3 is x and X is 3

## How we declare variables
 we declare variables by using 
   let
   const
      Example
         let x =30
         const y=50
       

## Rules for Naming Variables

 - What characters can be used.
                  Characters that can be used Variable names can contain:
                         **-   Letters (`A-Z`, `a-z`)
                         -   Numbers (`0-9`)
                         -   Underscores (`_`)
                         -   Dollar signs (`$`)**
                  
 - Whether names can start with numbers.
               A variable name **cannot begin with a number**
 - Whether spaces are allowed.
               Variable names **cannot contain spaces**.
 - Whether JavaScript keywords can be used as variable names.
                **Reserved JavaScript keywords** cannot be used as variable names
 - Whether variable names are case-sensitive.
                JavaScript treats uppercase and lowercase letters as **different characters.**
   
## Variable Naming Styles

  ** 1. camelCase (Most Common)**
        
   The first word starts with a lowercase letter, and each following word starts with a capital letter
   **Example**
    let  brianOduor = oluochBrian;
    const oduorBrian= brianOluoch
    Use **camelCase** for most JavaScript variables and functions,
    ** 2. PascalCase**

Every word starts with a capital letter.

**Examples:**
  let BrianOduor = OluochBrian
  const OduorBrian = BrianOluoch
  **3. snake_case**
Words are separated by underscores (`_`).
**Examples:**
let brian_oduor =100
const oduor_brian= 50

Variables make js to be easier and one to understand.Through the varrious styles and there rules one can know what his done wrong when writing a code.
## DATA TYPE
**

## Primitive Data Type

       Types of Primitive Data
1. The **Number** data type is used to represent both whole numbers (integers) and decimal numbers (floating-point values) in JavaScript. It can store positive numbers, negative numbers, and zero. Numbers are commonly used for calculations such as addition, subtraction, multiplication, and division.
         **let  number1**=43; //real number
        console.log(number1)

         **let  number2**=53.46; // floting number
         console. log(number2)

         **let  number3**=-34  // negative number
         console.log(number3)
   2. **strings-> store sequence of character**

                 **3 ways of creating a string**

                      **1.Double quote string**
                          let  str1="Double quote I am Oduor"// double quotes
                          console.log(str1);
                          
                       **2.Single quote string**
                       let  str2='Single Quote I am Oduor'// single quotes
                       console.log(str2);
                       
                       **3.Back Ticks:<Template string**
                       let  str3=`Back Tick I am Oduor`//Back Ticks
**  3**. **Boolean represent true or false**** 

         let  johnisMale=true  //true value
          console.log(johnisMale)
         let  johnisMarried=false
           console.log(johnisMarried)
   **Difference Between undefined and null**
   Both `undefined` and `null` represent the absence of a value, but they are used in different situations.

**Undefined**

 - Assigned automatically by JavaScript when a variable is declared but not given a value.
 - Assigned intentionally by the programmer to indicate no value.
 - Means a value has not been defined yet.

**Null**
 - Means an empty or unknown value has been deliberately set.
 - Default value of uninitialized variables.
 - Must be assigned explicitly.

