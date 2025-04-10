import { CommonModule } from "@angular/common";
import { Component, inject, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { TodoService } from "../../services/todo.service";

type State = "active" | "paused" | "stopped" | null;

@Component({
  selector: "app-test",
  imports: [CommonModule, FormsModule],
  templateUrl: "./test.component.html",
  styleUrl: "./test.component.scss",
})
export class TestComponent implements OnInit {
  newTask: string = "";
  tasks: string[] = [];

  // add service with constructor
  // constructor(private todoService: TodoService) { }

  constructor() { }

  // add service with inject
  private todoService = inject(TodoService);

  ngOnInit(): void {
    this.tasks = this.todoService.getTasks();
  }

  addTask() {
    if (this.newTask.trim() !== "") {
      this.todoService.addTask(this.newTask.trim());
      this.newTask = "";
      this.updateTasks();
    }
  }

  removeTask(index: number) {
    this.todoService.removeTask(index);
    this.updateTasks();
  }

  clearTasks() {
    this.todoService.clearTasks();
    this.updateTasks();
  }

  private updateTasks() {
    this.tasks = this.todoService.getTasks();
  }
}
