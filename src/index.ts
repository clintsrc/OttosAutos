// import classes
import Truck from "./classes/Truck.js";
import Car from "./classes/Car.js";
import Motorbike from "./classes/Motorbike.js";
import Wheel from "./classes/Wheel.js";
import Cli from "./classes/Cli.js";

// create an array of vehicles
const vehicles = [];

const truck1 = new Truck(Cli.generateVin(),"red", "Ford", "F-150", 2021, 5000, 120, [], 10000);

// will use default wheels
const car1 = new Car(
  Cli.generateVin(),
  'blue',
  'Toyota',
  'Camry',
  2021,
  3000,
  130,
  []
);

const motorbike1Wheels = [new Wheel(17, "Michelin"), new Wheel(17, "Michelin")];
const motorbike1 = new Motorbike(Cli.generateVin(), "black", "Harley Davidson", "Sportster", 2021, 500, 125, motorbike1Wheels);

// push vehicles to array
vehicles.push(car1);
vehicles.push(truck1);
vehicles.push(motorbike1);

/* 
 * for debugging
const car2 = new Car(Cli.generateVin(), 'red', 'Chevrolet', 'Corvette', 1978, 3444, 123, []);
const truck2 = new Truck(Cli.generateVin(), 'yellow', 'Chevrolet', '3100', 1946, 1452, 90, [], 2300);
const motorbike2 = new Motorbike(Cli.generateVin(), 'orange', 'Triumph', 'TR6', 1961, 1130, 120, motorbike1Wheels);
vehicles.push(car2);
vehicles.push(truck2);
vehicles.push(motorbike2);
 */

// create a new instance of the Cli class
const cli = new Cli(vehicles);

// start the cli
cli.startCli();
