const generateId = () => Math.round(Math.random() * 1000000);

class Influencer {
    constructor() {
        this.stupidPosts = [];
        this.subscribers = [];
    }

    subscribe(update) {
        const id = generateId();
        this.subscribers.push({
            id,
            update,
        });
        return id;
    }

    unsubscribe(id) {
        const index = this.subscribers.findIndex(s => s.id === id);
        if (index === -1) {
            return false;
        }
        this.subscribers.splice(index, 1);
        return true;
    }

    notifySubscribers(payload) {
        this.subscribers.forEach(item => item.update(payload));
    }

    createPost() {
        const newPost = '💩';
        this.stupidPosts.push(newPost);
        this.notifySubscribers('Братишка, я тебе покушать принес: ' + newPost);
        return newPost;
    }
}

class Fan {
    constructor(excitement) {
        this.id = generateId();
        this.excitement = excitement;
    }

    // !! this
    watchPost = (post) => {
        this.excitement += 10;
        console.log(`${this.id} watch ${post} and eat`);
    }

    getExcitement() {
        return this.excitement;
    }
}

const pewds = new Influencer();
const fanBase = [new Fan(100), new Fan(0)];
const subs = fanBase.map(fan => {
    const subscriptionId = pewds.subscribe(fan.watchPost);
    return {
        fanId: fan.id,
        subscriptionId,
    };
});
pewds.createPost();
pewds.createPost();
pewds.unsubscribe(subs[0].subscriptionId);
pewds.createPost();
