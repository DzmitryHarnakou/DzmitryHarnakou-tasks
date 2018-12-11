import { Component, OnInit } from '@angular/core';
import { TodoListService } from './todo-list-servise';
 
@Component({
    selector: 'todo-list',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit{

    public items:any;
    private _todoListService:any;

    constructor (todoListService: TodoListService) {
        this._todoListService = todoListService;
    }

    ngOnInit() {
        this.items = this._todoListService.getData();
    }

    addItem(item:string) {

        if (item === "") {
            return;
        }
        this._todoListService.addData(item);
    }

    removeItem(i:number) {
        this._todoListService.removeData (i);
    }

}



