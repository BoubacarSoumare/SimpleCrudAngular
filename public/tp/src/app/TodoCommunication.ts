import { Subject } from "../../node_modules/rxjs";
import { Injectable } from "../../node_modules/@angular/core";

@Injectable()
export class TodoCommunication{

    private newTodo = new Subject<String>();
    private updateTodo = new Subject<Object>();

    newTodoStream = this.newTodo.asObservable();
    updateTodoStream = this.updateTodo.asObservable();
    constructor(){

    }

    newTodoCom(){
        this.newTodo.next("ok");
    }

    updateTodoCom(todo){
        this.updateTodo.next(todo);
    }
}