import { VehicalType } from "./interfaces";
import { Vehicle } from "./vehicles";
export class Spot {
  private parkedVehicle: Vehicle | null;
  private allowedType: VehicalType;

  constructor(allowedType: VehicalType) {
    this.allowedType = allowedType
    this.parkedVehicle = null;
  }

  parkVehicle(vehicle: Vehicle): boolean {
    if(!this.isSpotAvailable()) return false;
    if(!this.canFit(vehicle)) return false;
    this.parkedVehicle = vehicle;
    return true;
  }

  getParkedVehicle(): Vehicle | null {
    if (this.isSpotAvailable()) return null;
    return this.parkedVehicle;
  }

  unParkVehicle(): Vehicle | null {
    const vehicle = this.parkedVehicle;
    if (this.parkedVehicle) this.parkedVehicle = null;
    return vehicle;
  }

  isSpotAvailable(): boolean {
    return this.parkedVehicle === null;
  }

  canFit(vehicle: Vehicle): boolean {
    return vehicle.getVehicleType() === this.allowedType;
  }
}
