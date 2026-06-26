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
   
    }
if(grossMonthlySalary >9000 && grossMonthlySalary <=108000)
    {Nssf= grossMonthlySalary -(9000) * (6/100)+grossMonthlySalary * (6/100)+{emloyerContribution}}
    
    
if(grossMonthlySalary >108000)
    {Nssf= grossMonthlySalary=(6480)+ {emloyerContribution}
    
    }

alert(`nssf is ${nssf} and Nssf level is ${typeof grossMonthlySalary}`)

/*
calculate the paye*/
 let taxableIncome=(grossMonthlySalary-nssf)


 let tier1= "0-24,000 KES";(taxableIncome*(10/100))
 let tier2 = "24,001-32,333 KES";(tier1 +taxableIncome-24000(25/100))
 let tier3 = "32,334-500,000 KES";(tier1+tier2+taxableIncome-32334(30/100))
 let tier4 = "500,001-800,000 KES";(tier1+tier2+tier3+taxableIncome-500000(32.5/100))
 let tier5 = "800,000- To Infity KES";(tier1+tier2+tier3+tier4+taxableIncome-800000(35/100))

if(taxableIncome < 24000)
    {paye = taxableIncome * (10/100);
    
}

 if(taxableIncome > 24000 && taxableIncome <= 32333)
    {paye =(tier1 +taxableIncome-24000(25/100))
    
 }

if(taxableIncome > 32333 && taxableIncome <= 500000 )
    {paye = (tier1+tier2+tier3+taxableIncome-500000(32.5/100))
    
    }
 
 if(taxableIncome > 500000 && taxableIncome <= 800000)
    {paye = (tier1+tier2+tier3+taxableIncome-500000(32.5/100))
    
    }
 

 if(taxableIncome > 800000){
    paye = (tier1+tier2+tier3+tier4+taxableIncome-800000(35/100))
    }
alert(`Paye is ${paye} and tier level is ${typeof tier}`)

