import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { TodoCommunication } from '../TodoCommunication';
import { Todo } from '../Todo';

@Component({
  selector: 'app-al-todo-form',
  templateUrl: './al-todo-form.component.html',
  styleUrls: ['./al-todo-form.component.css']
})
export class AlTodoFormComponent implements OnInit {

  private url='http://localhost:2403/todos';
  public todo:Todo={action:"", place:"", id:0};
  constructor(private http:Http, private todoCom:TodoCommunication) { }

  ngOnInit() {
    this.todoCom.updateTodoStream.subscribe((todo:Todo)=>{
      this.todo.id = todo.id;
      this.todo.action = todo.action;
      this.todo.place = todo.place;
    });
  }

  doSubmit(todo:Todo){

    if(!todo.id){
      this.http.post(this.url, todo).subscribe(response=>this.todoCom.newTodoCom());
    }else{
      this.http.put(this.url+"/"+ todo.id, todo).subscribe(response=>this.todoCom.newTodoCom());
      var bt_add = document.getElementById("bt_add");
      bt_add.innerText = "Ajouter";
      todo.id = null;
    }
  }

}
