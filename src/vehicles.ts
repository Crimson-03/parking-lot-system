import { VehicalType } from "./interfaces";

export abstract class Vehicle {
    protected vehicleType: VehicalType;
    protected vehicleNo: number;
    constructor(vehicleType: VehicalType, vechicleNo: number) {
        this.vehicleNo = vechicleNo;
        this.vehicleType = vehicleType;
    }

    getVehicleType() : VehicalType {
        return this.vehicleType;
    }

    getVehicleNumber(): number {
        return this.vehicleNo;
    }
}

export class Car extends Vehicle {
    constructor(vechicleNo: number) {
        super(VehicalType.CAR, vechicleNo);
    }
}

export class Bike extends Vehicle {
    constructor(vechicleNo: number) {
        super(VehicalType.BIKE, vechicleNo);
    }
}

export class Truck extends Vehicle {
    constructor(vechicleNo: number) {
        super(VehicalType.TRUCK, vechicleNo);
    }
}