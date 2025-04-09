import { CommonModule } from "@angular/common";
import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-test",
  imports: [CommonModule, FormsModule],
  templateUrl: "./test.component.html",
  styleUrl: "./test.component.scss",
})
export class TestComponent {
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
