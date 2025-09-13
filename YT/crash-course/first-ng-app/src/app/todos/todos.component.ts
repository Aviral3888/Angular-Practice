import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { TodoItemsComponent } from '../components/todo-items/todo-items.component';
import { Todo } from '../model/todo.type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todos',
  imports: [TodoItemsComponent, CommonModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent implements OnInit {
  public todoService = inject(TodosService);
  public todoItems = signal<Array<Todo>>([]);

  constructor() {
    console.log("todos.component loaded");
  }

  ngOnInit(): void {
    console.log(this.todoService.todoItems);
    this.todoItems.set(this.todoService.todoItems);
  }

}
