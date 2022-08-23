import { Component } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';

declare interface UserForm {
  firstName: string;
  lastName: string;
  age: number;
  address1: string;
  address2: string;
  address3: string;
}

@Component({
  selector: 'app-question-one',
  templateUrl: './question-one.component.html',
  styleUrls: ['./question-one.component.scss']
})
export class QuestionOneComponent {

  public userForm: FormGroup;

  constructor() { 
    this.userForm = new FormGroup({
      'firstName': new FormControl('', [Validators.required]),
      'lastName': new FormControl('', [Validators.required]),
      'emailField': new FormControl('', [Validators.email, Validators.required]),
      'ageField': new FormControl('', [Validators.min(18), Validators.max(30),Validators.required]),
      'address1': new FormControl('', [Validators.required , Validators.maxLength(10)]),
      'address2': new FormControl('', []),
      'address3': new FormControl('', []),
    });
  }

  callAfterSubmit(form: NgForm) {
    console.log('value', 'valid', form.value, form.valid);
  }



}
