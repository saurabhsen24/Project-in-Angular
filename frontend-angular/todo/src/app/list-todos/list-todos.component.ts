import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo{
    constructor(
      public id : number,
      public description : string,
      public done : boolean,
      public targetDate : Date
    ){

    }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})

export class ListTodosComponent implements OnInit {

  message : string
  todos : Todo[]

  constructor(private todoService : TodoDataService,
    private router : Router) { }
  
  // [
  //   new Todo(1,'Learn Angular',false,new Date()),
  //   new Todo(2,'Learn SpringBoot',false,new Date())
  // ];

  ngOnInit() {
      this.refershTodos();
  }

  refershTodos(){
    this.todoService.retrieveAllTodos('Saurabh').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    )
  }

  deleteTodo(id){
    console.log(`Delete Todo ${id}`)
    this.todoService.deleteTodoService('Saurabh',id).subscribe(
      response => {
        console.log(response);
        this.message = 'Delete Successfull!!!';
        this.refershTodos();
      }
    )
  }

  updateTodo(id){
    this.router.navigate(['todos',id]);
  }

  addTodo(){
    this.router.navigate(['todos',-1])
  }  
}
