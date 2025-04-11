import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { TestComponent } from "./components/test/test.component";
import { NameEditorComponent } from "./components/name-editor/name-editor.component";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, TestComponent, NameEditorComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "interview-master";
}
