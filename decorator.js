class Car {
    constructor(price, drivingWheels) {
        this.price = price;
        this.drivingWheels = drivingWheels;
    }

    getDrivingWheels() {
        return this.drivingWheels;
    }

    getPrice() {
        return this.price;
    }
}

class Tesla extends Car {
    constructor() {
        super(200, 2);
    }

    parking() {
        console.log('Tesla can parking');
    }
}

class CarDecorator {
    getPrice() {
        throw new Error('There is no realisation of the getPrice in decorator')
    }

    getDrivingWheels() {
        throw new Error('There is no realisation of the getDrivingWheels in decorator')
    }
}

class TransmitionPriceDecorator extends CarDecorator {
    constructor(car) {
        this.car = car;
    }

    getPrice() {
        const transmitionPrice = this.getDrivingWheels() * 500;
        return this.car.getPrice() + transmitionPrice;
    }

    getDrivingWheels() {
        return this.car.getDrivingWheels();
    }
}

class LeatherInteriorDecorator extends CarDecorator {
    constructor(car) {
        this.car = car;
    }

    getPrice() {
        return this.car.getPrice() + 600;
    }

    getDrivingWheels() {
        return this.car.getDrivingWheels();
    }
}

let tesla = new Tesla();
console.log(tesla.getPrice(), tesla.getDrivingWheels());
tesla = new TransmitionPriceDecorator(tesla);
console.log(tesla.getPrice(), tesla.getDrivingWheels());
tesla = new LeatherInteriorDecorator(tesla);
console.log(tesla.getPrice(), tesla.getDrivingWheels());

// OR

class Vehicle {
    constructor(price, drivingWheels) {
        this.price = price;
        this.drivingWheels = drivingWheels;
        this.decoratorsList = [];
    }

    decorate(decoratorName) {
        if (!Vehicle[decoratorName]) {
            throw new Error('Decorator dosent exist');
        }
        return this.decoratorsList.push(Vehicle[decoratorName]);
    }

    getDrivingWheels() {
        return this.drivingWheels;
    }

    getPrice() {
        // bed example it should not mutate this.price each time
        this.decoratorsList.forEach((dec) => this.price = dec(this.price));
        return this.price;
    }

    static leatherInterior(price) {
        return price + 400;
    }

    static transmition(price) {
        return price + 800;
    }
}


const veh = new Vehicle(200, 2);
console.log(veh.getPrice());
veh.decorate('leatherInterior');
console.log(veh.getPrice());
veh.decorate('transmition');
console.log(veh.getPrice());
