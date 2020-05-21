class Remote {
    constructor(device) {
        this.device = device;
    }
    togglePower() {
        if(this.device.isEnabled()) {
            return this.device.disable();
        } 
        this.device.enable();
    }
    volumeDown() {
        this.device.setVolume(this.device.getVolume() - 1);
    }
    volumeUp() {
        this.device.setVolume(this.device.getVolume() + 1);
    }
}

// without this inheritance this become strategy pattern
class AdvancedRemote {
    constructor(device) {
        super(device);
    }

    mute() {
        this.device.setVolume(0);
    }
}

// in normal language it should be interface
class Device {
    isEnabled() {
        throw new Error('There is no isEnabled realisation')
    }

    enable() {
        throw new Error('There is no enable realisation')
    }

    disable() {
        throw new Error('There is no desable realisation')
    }

    getVolume() {
        throw new Error('There is no getVolume realisation')
    }

    setVolume(percent) {
        throw new Error('There is no setVolume realisation')
    }
}

class TV extends Device{
    constructor() {
        super();
        this.isEnabled = false;
        this.volume = 0;
    }
    isEnabled() {
        return this.isEnabled;
    }
    
    enable() {
        this.isEnabled = true;
    }

    disable() {
        this.isEnabled = false;
    }

    getVolume() {
        return this.isEnabled ? this.volume : 0;
    }

    setVolume(percent) {
        if (isEnabled) {
            this.volume = percent > 100 ? 100 : percent;
            this.volume = percent < 0 ? 0 : this.volume;
        }

        throw new Error('Tv is not enabled')
    }
}