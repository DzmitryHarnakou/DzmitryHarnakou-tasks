import { Component, OnInit } from '@angular/core';
import { TodoListService } from './todo-list-servise';
import { moveItemInArray, CdkDragDrop } from '@angular/cdk/drag-drop';

 
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

        var curItem:string;
        if (item === "") {
            return;
        }

        this._todoListService.addData(item);
    }

    index:number;

    removeIndex() {
        if (this.items[this.index] === '') {
            this._todoListService.removeData (this.index);
        }
        this.index = undefined;
    }
    
    getIndex(index:number, todoItemText:string) {
        this.index = index;
        return this.items[index];
    }

    changeItem(todoItemText:string) {
        this.items[this.index] = todoItemText;
        localStorage.setItem('data', this.items);
    }

    removeItem(i:number) {
        this._todoListService.removeData (i);
    }

    drop(event: CdkDragDrop<any[]>){
        moveItemInArray(this.items, event.previousIndex, event.currentIndex);
        localStorage.setItem('data', this.items);
    }

}



