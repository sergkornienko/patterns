class Phone {
    constructor(number, call) {
        this.number = number;
        this.call = call;
    }

    call() {
        console.log({number: this.number});
        return this.call(this.number);
    }
}

function wiredCallStrategy(number) {
    console.log(number + ' call by wired');
}

function satelliteCallStrategy(number) {
    console.log(number + ' call by satellite');
}

const wiredPhone = new Phone('+3242334225', wiredCallStrategy);
console.log(wiredPhone.call());
const satellitePhone = new Phone('+3242334225', satelliteCallStrategy);
console.log(satellitePhone.call());