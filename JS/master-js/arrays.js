let Array = ["Mercedes-Benz",
            "GLE 450 4MATIC",
            "250 km/h",
    {
    cylinders: 6,
    engine_number: "M256-987654"
  },
  {
    name: "Mercedes-Benz Group AG",
    aka: "German Machine",
    country: "Germany"
  },
  {
    2025: "Latest Model",
    1: "Luxury SUV"
  },
  function () {
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
  [50,60,30]
]

console.log (Array)
console.table(Array)

for(let i = 0;
    i < Array.length;
    i++
){
    console.log("i is");
    console.log(Array[i])
}