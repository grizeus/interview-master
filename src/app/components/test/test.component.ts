import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from "@angular/forms";

type State = "active" | "paused" | "stopped" | null;

@Component({
  selector: "app-test",
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: "./test.component.html",
  styleUrl: "./test.component.scss",
})
export class TestComponent {
  // custom validator
  ageValidator(control: AbstractControl): ValidationErrors | null {
    const val = control.value;
    const isValidAge = val >= 18 && val <= 120;
    return isValidAge ? null : { ageInvalid: "Age must be between 18 and 120" };
  }

  forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const forbidden = nameRe.test(control.value);
      return forbidden ? { forbiddenName: { value: control.value } } : null;
    };
  }

  complexForm = new FormGroup({
    name: new FormControl("", [
      Validators.required,
      Validators.minLength(2),
      this.forbiddenNameValidator(/bob/i),
    ]),
    email: new FormControl("", [Validators.required, Validators.email]),
    age: new FormControl(null, [Validators.required, this.ageValidator]),
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(8),
    ]),
    consent: new FormControl(false, Validators.requiredTrue),
  });

  onSubmit() {
    console.warn(this.complexForm.value);
  }

  // getters
  get name() {
    return this.complexForm.get("name");
  }

  get email() {
    return this.complexForm.get("email");
  }

  get age() {
    return this.complexForm.get("age");
  }

  get password() {
    return this.complexForm.get("password");
  }

  get consent() {
    return this.complexForm.get("consent");
  }
}
