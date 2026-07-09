const car = {
  name: "Mercedes-Benz",
  model: "GLE 450 4MATIC",
  top_speed: "250 km/h",

  engine_information: {
    cylinders: 6,
    engine_number: "M256-987654"
  },

  manufacture: {
    name: "Mercedes-Benz Group AG",
    aka: "German Machine",
    country: "Germany"
  },

  numberProperty: {
    2025: "Latest Model",
    1: "Luxury SUV"
  },

  alert_info: function () {
    alert(
      `Car Name: ${this.name}
Model: ${this.model}
Top Speed: ${this.top_speed}
Engine Cylinders: ${this.engine_information.cylinders}
Engine Number: ${this.engine_information.engine_number}
Manufacturer: ${this.manufacture.name}
AKA: ${this.manufacture.aka}
Country: ${this.manufacture.country}`
    );
  }
};

// Call the function
car.alert_info();

//console.log(`Car datatype ${typeof car}`);
//console.log(car);
//console.log("--using console.log(table)--");
//console.table(car)

/*
access individual parts of your object.
 2 ways of accessing object properties
  1. dot notation<does not work for anything but looks good>
   -does not work properties which are
        -numbers
        - string with spaces,starting with a number or special symbols
        - can only access properties that follow variable naming rules
 2. bracket notation<will work for everything>
    -* access properties using variables.*
    
    
For each property of your object.includes nested ones
access it using both
dot notation and bracket notation.
print the value and also print its type

Hint for nested properties use example. car.manufacture.name or car["manufacture"]["name]
*/

console.log(`
Name is ${car.name} and its type is ${typeof car.name}
Model is ${car.model} and its type is ${typeof car.model}
Top Speed is ${car.top_speed} and its type is ${typeof car.top_speed}

Cylinders: ${car.engine_information.cylinders} and its type is ${typeof car.engine_information.cylinders}
Engine Number: ${car.engine_information.engine_number} and its type is ${typeof car.engine_information.engine_number}

Manufacturer: ${car.manufacture.name} and its type is ${typeof car.manufacture.name}
AKA: ${car.manufacture.aka} and its type is ${typeof car.manufacture.aka}
Country: ${car.manufacture.country} and its type is ${typeof car.manufacture.country}

`);

console.log(`
Name is ${car["name"]} and its type is ${typeof car["name"]}
Model is ${car["model"]} and its type is ${typeof car["model"]}
Top Speed is ${car["top_speed"]} and its type is ${typeof car["top_speed"]}

Cylinders: ${car["engine_information"]["cylinders"]} and its type is ${typeof car["engine_information"]["cylinders"]}
Engine Number: ${car["engine_information"]["engine_number"]} and its type is ${typeof car["engine_information"]["engine_number"]}

Manufacturer: ${car["manufacture"]["name"]} and its type is ${typeof car["manufacture"]["name"]}
AKA: ${car["manufacture"]["aka"]} and its type is ${typeof car["manufacture"]["aka"]}
Country: ${car["manufacture"]["country"]} and its type is ${typeof car["manufacture"]["country"]}
`);
