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

class Dialog {
    render() {
        throw new Error('There is no onClick realisation');
    }
    onClick() {
        throw new Error('There is no onClick realisation');
    }
}

class WindowsDialog extends Dialog {
    constructor(x, y) {
        this.positionX = x;
        this.positionY = y;
    }
    render() {
        console.log('Render WindowsDialog');
    }
    onClick() {
        console.log('Click WindowsDialog');
    }
}

class MacDialog extends Dialog {
    constructor(x, y) {
        this.positionX = x;
        this.positionY = y;
    }
    render() {
        console.log('Render MacDialog');
    }
    onClick() {
        console.log('Click MacDialog');
    }
}

class UIFactory {
    createButton() {
        throw new Error('There is no createButton realisation');
    }
    createDialog() {
        throw new Error('There is no createDialog realisation');
    }
}

class WindowsUIFactory extends UIFactory {
    createButton(x, y) {
        // here is some additional logic
        return new WindowsButton(x, y);
    }
    createDialog(x, y) {
        // here is some additional logic
        return new WindowsDialog(x, y);
    }
}

class MacUIFactory extends UIFactory {
    constructor(size) {
        this.size = size;
    }
    createButton(x, y) {
        // here is some additional specific for Macs logic
        return new MacDialog(x, y);
    }
}