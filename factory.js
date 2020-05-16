class Button {
    render() {
        throw new Error('There is no onClick realisation');
    }
    onClick() {
        throw new Error('There is no onClick realisation');
    }
}

class WindowsButton extends Button {
    constructor(x, y) {
        this.positionX = x;
        this.positionY = y;
    }
    render() {
        console.log('Render WindowsButton');
    }
    onClick() {
        console.log('Click WindowsButton');
    }
}

class MacButton extends Button {
    constructor(x, y) {
        this.positionX = x;
        this.positionY = y;
    }
    render() {
        console.log('Render MacButton');
    }
    onClick() {
        console.log('Click MacButton');
    }
}

class ButtonsFactory {
    createButton() {
        throw new Error('There is no createButton realisation');
    }
}

class RandomButtonsFactory extends ButtonsFactory {
    constructor(probability) {
        this.probability = probability;
    }
    createButton(x, y) {
        const rand = Math.random();
        return rand > this.probability 
            ? new WindowsButton(x, y) 
            : new MacButton(x, y);
    }
}

class SizeDependentButtonsFactory extends ButtonsFactory {
    constructor(size) {
        this.size = size;
    }
    createButton(x, y) {
        return x > this.size && y < this.size 
            ? new WindowsButton(x, y) 
            : new MacButton(x, y);
    }
}