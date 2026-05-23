// A parent class to demonstrate inheritance
class Vehicle {
  constructor(type) {
    this.type = type; // Public instance property
  }

  identify() {
    return `This is a ${this.type}.`;
  }
}


// A child class demonstrating all JS class keywords
class ElectricCar extends Vehicle {
  // 1. Static Field (Belongs to class, not instances)
  static totalCarsCreated = 0;

  // 2. Private Fields (Prefixed with #)
  #batteryHealth = 100;
  #vinNumber;

  // 3. Constructor
  constructor(model, vin) {
    // 4. super keyword (Calls parent constructor)
    super("Car"); 
    
    // 5. this keyword (References current instance)
    this.model = model; 
    this.#vinNumber = vin;

    // Accessing a static field inside the constructor
    ElectricCar.totalCarsCreated++;
  }

  

  // 6. Getter (get keyword)
  get batteryStatus() {
    return `${this.#batteryHealth}%`;
  }

  // 7. Setter (set keyword)
  set chargeBattery(amount) {
    if (amount > 0 && amount <= 100) {
      this.#batteryHealth = amount;
    }
  }

  // 8. Public Method
  getDetails() {
    // Calls parent class method using super
    return `${super.identify()} Model: ${this.model}.`;
  }

  // 9. Private Method
  #getSecretVin() {
    return `VIN: ${this.#vinNumber}`;
  }

  // 10. Static Method
  static compareBattery(carA, carB) {
    return `Comparing data using static tool.`;
  }
}

let newCar= new ElectricCar(2010,45)

// console.log(newCar.chargeBattery)



// --- Execution & Testing ---
const myCar = new ElectricCar("Model S", "XYZ12345");

console.log(myCar.getDetails());       // Output: "This is a Car. Model S."
console.log(myCar.batteryStatus);     // Output: "100%" (Triggered via Getter)

myCar.chargeBattery = 95;              // (Triggered via Setter)
console.log(myCar.batteryStatus);     // Output: "95%"

console.log(ElectricCar.totalCarsCreated); // Output: 1 (Static property access)

// The following lines would throw errors if uncommented:
// console.log(myCar.#batteryHealth);  // SyntaxError: Private field
// myCar.#getSecretVin();              // SyntaxError: Private method
