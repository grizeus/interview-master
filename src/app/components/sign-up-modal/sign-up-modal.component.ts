import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: "app-sign-up-modal",
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

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<SignUpModalComponent>) {
    this.signUpForm = this.fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.signUpForm.valid) {
      const { login, password, email, firstName, lastName } = this.signUpForm.value;
      console.log('Login:', login);
      console.log('Password:', password);
      console.log('Email:', email);
      console.log('First Name:', firstName);
      console.log('Last Name:', lastName);
      this.dialogRef.close({ login, password, email, firstName, lastName });
    }
  }

  onCancel() {
    this.dialogRef.close();
  }

  get login() {
    return this.signUpForm.get('login');
  }

  get password() {
    return this.signUpForm.get('password');
  }

  get email() {
    return this.signUpForm.get('email');
  }

  get firstName() {
    return this.signUpForm.get('firstName');
  }

  get lastName() {
    return this.signUpForm.get('lastName');
  }
}
