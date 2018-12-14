import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'list-item',
    templateUrl: './list-item.component.html',
    styleUrls: ['./list-item.component.css'],
})

export class ItemComponent{

    @Input() items:any;
    @Input() i:number;
    @Input() todoItemText:string;
    @Output () removeCurrentItem = new EventEmitter<number>();
    removeItem(i:number) {
        this.removeCurrentItem.emit(i);
    }

    @Output () selectedItem = new EventEmitter<number>();
    onSelect(index:number) {
        this.selectedItem.emit(index);
    }

}

