import { VehicalType } from "./interfaces";
import { Spot } from "./spot";
import { Vehicle } from "./vehicles";

export class Floor {
  private spotsWithType: Map<VehicalType, Spot[]>;
  private emptySpots: Map<VehicalType, Spot[]>;
  private totalSpots: number;
  private capacity: number;

  constructor(capacity: number) {
    this.totalSpots = 0;
    this.capacity = capacity;
    this.spotsWithType = new Map<VehicalType, Spot[]>();
    this.emptySpots = new Map<VehicalType, Spot[]>();
  }

  addSpot(vehicleType: VehicalType): void {
    if (this.totalSpots >= this.capacity) {
      console.log("Cannot add more spots, floor is full");
      return;
    }
    const spot = new Spot(vehicleType);
    const spotArr = this.spotsWithType?.get(vehicleType) || [];
    spotArr.push(spot);
    this.spotsWithType?.set(vehicleType, spotArr);
    const emptySpotArr = this.emptySpots?.get(vehicleType) || [];
    emptySpotArr.push(spot);
    this.emptySpots?.set(vehicleType, emptySpotArr);
    this.totalSpots++;
    console.log(`Spot of type: ${vehicleType} is added`);
  }

  findEmptySpot(vehicleType: VehicalType) {
    const spotArr = this.emptySpots?.get(vehicleType) || [];
    return spotArr.length > 0 ? spotArr[0] : null;
  }

  parkVehicle(vehicle: Vehicle): Spot | null {
    if (this.totalSpots === 0) {
      console.log("Floor does not have any spots as of now");
      return null;
    }
    const spot = this.findEmptySpot(vehicle.getVehicleType());
    if (spot) {
      const isParked = spot.parkVehicle(vehicle);
      if (isParked) {
        const spotArr = this.emptySpots?.get(vehicle.getVehicleType());
        if (spotArr) {
          const filteredEmptySpotArr = spotArr.filter((item) => item !== spot);
          this.emptySpots?.set(vehicle.getVehicleType(), filteredEmptySpotArr);
        }
        return spot;
      }
    }
    return null;
  }

  unParkVehicle(vehicle: Vehicle): boolean {
    const spotArr = this.spotsWithType?.get(vehicle.getVehicleType());
    if (spotArr) {
      for (let spot of spotArr) {
        if (spot && spot?.getParkedVehicle() === vehicle) {
          spot?.unParkVehicle();
          const emptySpotArr =
            this.emptySpots?.get(vehicle.getVehicleType()) || [];
          emptySpotArr.push(spot);
          console.log("Vehicle has been unparked");
          return true;
        }
      }
    }

    console.log("No vehicle having this number is parked at the spot");
    return false;
  }
}
