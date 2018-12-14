
export class TodoListService{
   
    private items:any = [];

    constructor () { }

    public getData () {
        if (localStorage.data.split(',') == '') {
            return this.items;
        } else { this.items = localStorage.data.split(',');
        return this.items;}

    }

    public addData (todoItem:string) {
        this.items.unshift(todoItem);
        localStorage.setItem('data', this.items);
    }

    public removeData (index:number) {
        this.items.splice(index, 1);
        localStorage.setItem('data', this.items);
    }

}



