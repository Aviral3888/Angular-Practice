import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { TodoItemsComponent } from '../components/todo-items/todo-items.component';
import { Todo } from '../model/todo.type';
import { CommonModule, NgIf } from '@angular/common';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-todos',
  imports: [TodoItemsComponent, CommonModule, NgIf],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent implements OnInit {
  public todoService = inject(TodosService);
  public todoItems = signal<Array<Todo>>([]);
  public todoLoader: boolean = true;

  constructor() {
    console.log("todos.component loaded");
  }

  ngOnInit(): void {

    this.todoService.fetchTodosFromApi()
      .pipe(
        catchError((error) => {
          console.log("Error:", error);
          throw error;
        })
      ).subscribe((todos) => {
        console.log("Todos:", todos);
        this.todoItems.set(todos);
        this.todoLoader = false;
      });

  }

}
