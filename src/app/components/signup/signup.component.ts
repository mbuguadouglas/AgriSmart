import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  signupForm: FormGroup;
  message: string = '';

  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      role: ['', Validators.required]
    });
  }

  onSignup() {
    if (this.signupForm.valid) {
      const signupData = this.signupForm.value;
      console.log('User Signup Data:', signupData);
      // Implement your signup logic here, such as calling an authentication service
      this.message = 'Signup successful! Please login.';
      this.signupForm.reset();
    } else {
      this.message = 'Please fill out the form correctly.';
    }
  }

}
