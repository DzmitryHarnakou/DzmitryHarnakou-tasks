import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'list-item',
    templateUrl: './list-item.component.html',
    styleUrls: ['./list-item.component.css'],
})

export class ItemComponent {

    @Input() items:any;
    @Input() i:number;
    @Output () removeCurrentItem = new EventEmitter<number>();
    removeItem(i:number) {
        this.removeCurrentItem.emit(i);
    }
}

