import { Component } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { CommonModule } from "@angular/common";
import { SignUpService } from "../../services/sign-up.service";

@Component({
  selector: "app-sign-up-modal",
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  templateUrl: "./sign-up-modal.component.html",
  styleUrl: "./sign-up-modal.component.scss",
})
export class SignUpModalComponent {
  signUpForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<SignUpModalComponent>,
    public signUpService: SignUpService
  ) {
    this.signUpForm = this.fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
    });
  }

  onSubmit() {
    if (this.signUpForm.valid) {
      const { email, password, firstName, lastName } = this.signUpForm.value;
      this.signUpService
        .register(email, password, firstName, lastName)
        .subscribe(() => {
          this.dialogRef.close(this.signUpForm.value);
        });
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  get email() {
    return this.signUpForm.get("email");
  }
  
  get password() {
    return this.signUpForm.get("password");
  }


  get firstName() {
    return this.signUpForm.get("firstName");
  }

  get lastName() {
    return this.signUpForm.get("lastName");
  }
}
