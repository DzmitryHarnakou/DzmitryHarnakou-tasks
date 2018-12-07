import { TodoItem } from "./todo-item";

export class TodoItemService {
   
    private items: TodoItem[] = [{action:"Todo list", done: false}];

    getData(): TodoItem[] {
         
        return this.items;
    }
    addData(action: string){
         
        this.items.push(new TodoItem(action, false));
    }

    deleteData(i:number) {
        this.items.splice(i,1);
    }
}



