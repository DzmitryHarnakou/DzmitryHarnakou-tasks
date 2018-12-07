import { Component, OnInit } from '@angular/core';
import {TodoItemService} from '../todo-item-servise';
import {TodoItem} from '../todo-item'; 

@Component({
    selector: 'list-item',
    templateUrl: './list-item.component.html',
    styleUrls: ['./list-item.component.css'],
    providers: [TodoItemService]
})
export class ItemComponent  implements OnInit {
    items: TodoItem[] = [];
    constructor(private dataService: TodoItemService){}
     
    ngOnInit(){
        this.items = this.dataService.getData();
    }

    deleteItem (i:number) {
        this.dataService.deleteData(i);
    }

}