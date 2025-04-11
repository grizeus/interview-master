import { Component } from "@angular/core";
import { FormControl, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: "app-name-editor",
  imports: [ReactiveFormsModule],
  templateUrl: "./name-editor.component.html",
  styleUrl: "./name-editor.component.scss",
})
export class NameEditorComponent {
  name = new FormControl("");

  updatename() {
    this.name.setValue("Sivanna");
  }
}
