import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  private todos: string[] = [];

  addTask(task: string) {
    this.todos.push(task);
  }

  getTasks() {
    return this.todos;
  }

  removeTask(index: number) {
    this.todos.splice(index, 1);
  }

  clearTasks() {
    this.todos = [];
  }
}
