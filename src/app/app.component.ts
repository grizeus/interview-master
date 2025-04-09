import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { TestComponent } from "./components/test/test.component";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, TestComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "interview-master";
  messageFromParent = "I'm your father";
  messageFromChild = "";
  getMessageFromChild(msg: string) {
    this.messageFromChild = msg;
  }
}
