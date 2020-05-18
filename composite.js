class Node {
    getActions() {
        throw new Error('There is no realisation of getActions');
    }
}

class NoActionNode extends Node {
    constructor(title) {
        super();
        this.title = title;
    }
    getActions() {
        console.log(this.title, 'dont have actions');
        return null;
    }
}

class RegularNode extends Node {
    constructor(title, action, nodes) {
        super();
        this.title = title;
        this.action = action;
        this.nodes = nodes;
    }
    getActions() {
        console.log(this.title, 'have action', this.action);
        return this.nodes.map(n => n.getActions());
    }
}