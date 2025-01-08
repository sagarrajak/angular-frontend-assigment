import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';

@Component({
  standalone:true,
  imports: [FormsModule, ReactiveFormsModule, BrowserModule, AppRoutingModule, ReactiveFormsModule,FormsModule],
  selector: 'app-root',
  templateUrl: './question-one.component.html',
  styleUrls: ['./question-one.component.css']
})
export class QuestionOneComponent {
  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      emailField: ['', [Validators.required, Validators.email]],
      ageField: ['', [Validators.required, Validators.min(18), Validators.max(30)]],
      address1: ['', [Validators.required, Validators.maxLength(10)]],
      address2: [''],
      address3: ['']
    });
  }

  callAfterSubmit(testForm) {
    console.log('Form Submitted!', testForm);
  }
}
