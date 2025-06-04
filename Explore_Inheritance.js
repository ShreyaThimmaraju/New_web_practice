class Vehicle {
    constructor() {
        this.type = "Generic Vehicle";
    }


    describe() {
        console.log('This is a ${this.type}');
    }
}

class Car extends Vehicle {
    constuctor(brand) {
        super();
        this.brand = brand;
    }

    describe() {
        super.describe();
        console.log(`This is a ${this.brand} car.`);
    }
}

const genericVehicle = new Vehicle();
genericVehicle.describe();

const myCar = new Car("Tesla");
myCar.describe();