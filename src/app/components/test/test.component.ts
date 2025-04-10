import { CommonModule } from "@angular/common";
import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HighlightDirective } from "../../directives/highlight.directive";
import { TruncatePipe } from "../../pipes/truncate.pipe";

type State = "active" | "paused" | "stopped" | null;

@Component({
  selector: "app-test",
  imports: [CommonModule, FormsModule, HighlightDirective, TruncatePipe],
  templateUrl: "./test.component.html",
  styleUrl: "./test.component.scss",
})
export class TestComponent {
  items = [
    { "id": 1, "name": "apple" },
    { "id": 2, "name": "banana" },
    { "id": 3, "name": "orange" },
    { "id": 4, "name": "kiwi" },
    { "id": 5, "name": "elderberry" },
  ];
  today = new Date();
  appState: State = "paused";

  title: string = "This is interpolation";
  firstName: string = "John";
  lastName: string = "Doe";

  private isEnabled: boolean = true;
  isActive: boolean = true;
  isDisabled: boolean = false;
  isClickedState = false;
  inputText: string = "";

  @Input() childMessage: string = "";
  @Output() messageFromChild = new EventEmitter<string>();

  getIsEnabled() {
    return this.isEnabled;
  }

  getFullName() {
    return `My name is ${this.firstName} ${this.lastName}`;
  }

  toggleState() {
    this.isClickedState = !this.isClickedState;
  }

  sendToParent() {
    this.messageFromChild.emit("I'm your son");
  }
}
