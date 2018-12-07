export class Model {
    items:any;
    constructor() {
        this.items = []
    }
}

export class TodoItem {
    action:string;
    done:boolean;

    constructor(action:string, done:boolean) {
        this.action = action;
        this.done = done;
    }
}

