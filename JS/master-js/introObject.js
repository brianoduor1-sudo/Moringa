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