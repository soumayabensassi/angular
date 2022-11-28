import { Component, OnInit } from '@angular/core';
import { todo } from '../core/todo';
import { CalculServiceService } from '../services/calcul-service.service';

@Component({
  selector: 'app-todo-list-component',
  templateUrl: './todo-list-component.component.html',
  styleUrls: ['./todo-list-component.component.css']
})
export class TodoListComponentComponent implements OnInit {
  nmb!:number;
  todolist!:todo[];
 
  constructor(private calcul:CalculServiceService) { }

  ngOnInit(): void {
    this.todolist=[{"userId": 1, "id": 1, "title": "delectus aut autem","completed": false},
    {"userId": 1, "id": 2, "title": "quis ut nam facilis et officia qui", "completed": false},
    {"userId": 1, "id": 3, "title": "fugiat veniam minus", "completed": false},
    {"userId": 1, "id": 4, "title": "quo adipisci enim quam utab", "completed": true}
  ];


}
Bilan()
{
  this.nmb=this.calcul.getNumberOf(this.todolist,"completed",true)
}

}
