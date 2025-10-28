import { Floor } from "./floor";
import { Spot } from "./spot";
import { Vehicle } from "./vehicles";

export class Parking {
  private floors: Floor[];
  private maxFloors: number = 0;
  private totalFloor: number;
  static instance: Parking | null = null;

  private constructor() {
    this.floors = [];
    this.maxFloors = 0;
    this.totalFloor = 0;
  }

  setCapacity(capacity: number): void {
    this.maxFloors = capacity;
  }

  // singleton pattern
  public static get getInstance(): Parking {
    if (!this.instance) {
      this.instance = new Parking();
    }
    return this.instance;
  }

  addFloors(floor: Floor): void {
    if (this.totalFloor >= this.maxFloors) {
      console.log("Cannot add more floors, parking is full!!!");
      return;
    }
    this.floors.push(floor);
    this.totalFloor++;
    console.log(`Floor added successfully. Total floors: ${this.totalFloor}`);
  }

  parkVehicle(vehicle: Vehicle): Spot | null {
    for (let i = 0; i < this.floors.length; i++) {
      const parkedSpot = this.floors[i]?.parkVehicle(vehicle);
      if (parkedSpot) {
        console.log(`Vehicle parked at Floor ${i + 1}, Spot Type: ${vehicle.getVehicleType()}`);
        return parkedSpot;
      }
    }
    console.log("No spot is available, cannot park");
    return null;
  }

  unParkVehicle(vehicle: Vehicle) : boolean {
    for (let i = 0; i < this.floors.length; i++) {
      const success = this.floors[i]?.unParkVehicle(vehicle);
      if (success) {
        console.log(`Vehicle unparked from Floor ${i + 1}`);
        return true;
      }
    }
    console.log("Vehicle not found in parking");
    return false;
  }
}
