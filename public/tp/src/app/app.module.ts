import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { AlTodoTableComponent } from './al-todo-table/al-todo-table.component';
import { AlTodoFormComponent } from './al-todo-form/al-todo-form.component';
import { HttpModule } from '../../node_modules/@angular/http';
import { TodoCommunication } from './TodoCommunication';

@NgModule({
  declarations: [
    AppComponent,
    AlTodoTableComponent,
    AlTodoFormComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [TodoCommunication],
  bootstrap: [AppComponent]
})
export class AppModule { }
