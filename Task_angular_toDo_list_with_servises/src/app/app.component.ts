import { Component, OnInit} from '@angular/core';
import {TodoItemService} from './todo-item-servise';
import {TodoItem} from './todo-item';
 
@Component({
    selector: 'todo-list',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [TodoItemService]
})
export class AppComponent{
    items: TodoItem[] = [];
    constructor(private dataService: TodoItemService){}
     
    addItem(action: string){
        this.dataService.addData(action);
    }
}