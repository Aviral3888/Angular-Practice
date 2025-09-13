import { Injectable } from '@angular/core';
import { Todo } from '../model/todo.type';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  public todoItems: Array<Todo> = [
    { title: "Groceries", id: 1, userId: 1, completed: false },
    { title: "Car wash", id: 2, userId: 1, completed: false },
    { title: "Library", id: 3, userId: 1, completed: false },
    { title: "Barber", id: 4, userId: 1, completed: false }
  ]

  constructor() {
    console.log("todos.service loaded");
  }
}
