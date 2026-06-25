/*

 prompt ("")
 
 checking if is a number
  1. isNaN
  2. Number->
  3. +<>
  
*/
// stay here unit he/she has entered the correct gross

let grossMonthlySalary = null;
while(true){let gross = prompt("Enter your gross salary");
    if (!isNaN(gross)){gross = Number(gross);
        if(gross > 0){grossMonthlySalary = gross;break;

        }
    }
    alert(`Invalid amount entered.Ensure you enter a number greater than 0`);
}
console.log(`Gross salary is ${grossMonthlySalary} its type ${typeof grossMonthlySalary}`

);

/*
calculate the paye*/

if(grossMonthlySalary < 24000)
    {paye = grossMonthlySalary * (10/100);
    tier1= "0-24,000 KES"
}

 if(grossMonthlySalary > 24000 && grossMonthlySalary <= 32333)
    {paye = grossMonthlySalary * (25/100)
    tier2 = "24,001-32,333 KES"
 }

if(grossMonthlySalary > 32333 && grossMonthlySalary <= 500000 )
    {paye = grossMonthlySalary * (30/100)
    tier3 = "32,334-500,000 KES"
    }
 
 if(grossMonthlySalary > 500000 && grossMonthlySalary <= 800000)
    {paye = grossMonthlySalary * (32.5/100)
    tier4 = "500,001-800,000 KES"
    }
 

 if(grossMonthlySalary > 800000){
    paye = grossMonthlySalary * (35/100)
    tier5 = "800,000- infinity KES"}
