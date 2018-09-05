import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { TodoCommunication } from '../TodoCommunication';

@Component({
  selector: 'app-al-todo-table',
  templateUrl: './al-todo-table.component.html',
  styleUrls: ['./al-todo-table.component.css']
})
export class AlTodoTableComponent implements OnInit {

  private url='http://localhost:2403/todos';
  todos = [];
  constructor(private http:Http, private todoCom:TodoCommunication) { }

  ngOnInit() {
    this.loadTodos();
    this.todoCom.newTodoStream.subscribe(p=>this.loadTodos());
  }

  doDelete(todo){
    this.http.delete(this.url+"/"+todo.id).subscribe(response=>this.loadTodos());
  }

  private loadTodos(){
    this.http.get(this.url).subscribe(response=>this.todos = response.json());
  }

  doUpdate(todo){
    this.todoCom.updateTodoCom(todo);
    var bt_add = document.getElementById("bt_add");
    bt_add.innerText = "Modifier";
  }
}
