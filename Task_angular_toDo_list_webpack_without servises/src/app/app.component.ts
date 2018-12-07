import { Component} from '@angular/core';
import { Model, TodoItem } from './model'
 
@Component({
    selector: 'todo-list',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    model = new Model();

    getTodoItems() {
        return this.model.items;
    }

    addItem(newItem:string) {
        if (newItem !="") {
            this.model.items.unshift(new TodoItem(newItem, false));
        }
    }

    deleteItem (itemIndex:number) {
    this.model.items.splice(itemIndex, 1);
    }

    func(val:string) {
        console.log(val);
    }
 }