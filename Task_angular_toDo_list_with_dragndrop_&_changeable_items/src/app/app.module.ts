import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {ItemComponent} from './list-item/list-item.component';
import {TodoListService} from './todo-list-servise';
import {DragDropModule } from '@angular/cdk/drag-drop'

 
@NgModule({
    imports:[BrowserModule, FormsModule, DragDropModule],
    declarations: [AppComponent, ItemComponent],
    bootstrap: [AppComponent],
    providers: [TodoListService]
})
export class AppModule{}