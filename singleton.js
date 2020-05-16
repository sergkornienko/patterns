// 💩💩💩
class Chat {
    constructor() {
        if (typeof Chat.instance === 'object') {
            return Chat.instance;
        }
        this.count = 0;
        Chat.instance = this;
    }
    showMessage() {
        this.count += 1;
        console.log('Message #' + this.count);
    }
}

const chat1 = new Chat();
chat1.showMessage();
chat1.showMessage();
chat1.showMessage();
const chat2 = new Chat();
chat2.showMessage();
chat1.showMessage();
chat2.showMessage();

