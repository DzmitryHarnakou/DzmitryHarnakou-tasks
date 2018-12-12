import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {ItemComponent} from './list-item/list-item.component';
import {TodoListService} from './todo-list-servise';
import {RouterModule} from '@angular/router';
import {RouterComponent} from "./router/router.component";
import {HomeComponent} from "./home/home.component"

const routes = [
    {path: '', component: HomeComponent},
    {path: 'todo', component: AppComponent}
];
 
@NgModule({
    imports:[
        BrowserModule, 
        FormsModule, 
        RouterModule.forRoot(routes)
    ],
    declarations: [AppComponent, ItemComponent, RouterComponent, HomeComponent],
    bootstrap: [RouterComponent],
    providers: [TodoListService],
})
export class AppModule{}