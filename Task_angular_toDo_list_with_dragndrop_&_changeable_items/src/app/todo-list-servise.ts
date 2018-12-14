export class TodoListService {
   
    private items:any = [];

    constructor () { }

    public getData () {
        return this.items;
    }

    public addData (todoItem:string) {
        this.items.unshift(todoItem);
    }

    public removeData (index:number) {
        this.items.splice(index, 1);
    }

}



