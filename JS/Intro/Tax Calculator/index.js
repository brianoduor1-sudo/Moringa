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
calculate the Nssf*/
let nssf= 0
let emloyerContribution=(nssf)

if(grossMonthlySalary < 9000)
    {Nssf= grossMonthlySalary * (6/100) + {emloyerContribution}
     nssf_tier = "nssf 0-9000 KES"
   
    }
if(grossMonthlySalary >9000 && grossMonthlySalary <=108000)
    {Nssf= grossMonthlySalary -(9000) * (6/100)+grossMonthlySalary * (6/100)+{emloyerContribution}
     nssf_tier = "nssf 9000-108000 KES"}
    
    
if(grossMonthlySalary >108000)
    {Nssf= grossMonthlySalary=(6480)+ {emloyerContribution}
     nssf_tier = "nssf 108000 to infinity KES"
    }

alert(`nssf is ${nssf} and Nssf level is ${typeof nssf_tier}`)

/*
calculate the paye*/
 let taxableIncome=(grossMonthlySalary-nssf)

 const personal_relief=2400

 const bracket1= 24000;
 const bracket2= 32333;
 const bracket3= 500000;
 const bracket4= 800000;

 const band1= bracket1*0.1;
 const band2= (bracket2 - bracket1)*0.25;
 const band3= (bracket3 -bracket2)*0.3;
 const band4= (bracket4 -bracket3)*0.325;
 
 if(taxableIncome <= 24000)
    {paye= taxableIncome*0.1
    paye_tier = "Paye 0-24000 KES"
    } else if (taxableIncome <= 32333){
        let diff= taxableIncome-24000
        let tax= diff*0.25
        paye= tax + band1;
        paye_tier="Paye 24000-32333"
    }  else if (taxableIncome <= 500000){
        let diff= taxableIncome-32333
        let tax= diff*0.3
        paye= tax + band1+band2;
        paye_tier="Paye 32000-500000"
    }  else if (taxableIncome <= 800000){
        let diff= taxableIncome-500000
        let tax= diff*0.325
        paye= tax + band1+band2+band3;
        paye_tier="Paye 500000-800000"
    }  else  (taxableIncome =>800001)
    {
        let diff= taxableIncome-800000
        let tax= diff*0.35
        paye= tax + band1+band2+band3+band4;
        paye_tier="Paye 800000 to infinity KES"
    }


const final_paye = Math.max(0, paye -personal_relief)

alert( `Taxable Income ${taxableIncome}
        Paye ${paye}
        Personal Relief ${personal_relief}
        Final Paye ${final_paye}
        Tier ${paye_tier}`);

let shif=(grossMonthlySalary*2.75);
let housingLevy=(grossMonthlySalary*1.5);

let netIncome=(grossMonthlySalary -(paye+shif+housingLevy+nssf))
alert(`For gross salary ${grossMonthlySalary}
       nssf ${nssf} tier ${nssf_tier}
       Persona Relief ${personal_relief}
       Final Paye ${final_paye}
       Tier ${paye_tier}`);