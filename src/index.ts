import { Floor } from "./floor";
import { VehicalType } from "./interfaces";
import { Parking } from "./parking";
import { Car } from "./vehicles";

const parkingInstance1 = Parking.getInstance;
parkingInstance1.setCapacity(2);
const f1 = new Floor(5);
const f2 = new Floor(2);

parkingInstance1.addFloors(f1);
parkingInstance1.addFloors(f2);

f1.addSpot(VehicalType.BIKE)
f1.addSpot(VehicalType.CAR);
f1.addSpot(VehicalType.CAR);
f1.addSpot(VehicalType.CAR);
f1.addSpot(VehicalType.TRUCK);
f1.addSpot(VehicalType.TRUCK); // will give error

const parkingInstance2 = Parking.getInstance;

const car1 = new Car(1234);
const car2 = new Car(2345);
const car3 = new Car(986);
const car4 = new Car(98767);

parkingInstance1.parkVehicle(car1);
parkingInstance1.parkVehicle(car2);
parkingInstance1.parkVehicle(car3);
parkingInstance2.parkVehicle(car4);