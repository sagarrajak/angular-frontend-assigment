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
      'middleName': new FormControl('', [Validators.required]),
      'Email': new FormControl('', [Validators.email, Validators.required]),
      'Age': new FormControl('', [Validators.required,Validators.min(18), Validators.max(30)]),
      'Address': new FormControl('', [Validators.required , Validators.maxLength(10)]),
      'Address2': new FormControl('', []),
      'Address3': new FormControl('', []),
    });
  }

  callAfterSubmit(form: NgForm) {
    console.log('value', 'valid', form.value, form.valid);
  }



}
