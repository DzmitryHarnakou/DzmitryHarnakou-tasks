import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {ItemComponent} from './list-item/list-item.component';
import {TodoListService} from './todo-list-servise';
 
@NgModule({
    imports:[BrowserModule, FormsModule],
    declarations: [AppComponent, ItemComponent],
    bootstrap: [AppComponent],
    providers: [TodoListService]
})
export class AppModule{}