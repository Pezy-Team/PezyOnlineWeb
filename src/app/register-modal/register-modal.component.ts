import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
  styleUrls: ['./register-modal.component.scss']
})
export class RegisterModalComponent implements OnInit {
  validatingForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.validatingForm = new FormGroup({
      modalFormDarkEmail: new FormControl('', Validators.email),
      modalFormDarkPassword: new FormControl('', Validators.required)
    });
  }
  get modalFormDarkEmail() {
    return this.validatingForm.get('modalFormDarkEmail');
  }

  get modalFormDarkPassword() {
    return this.validatingForm.get('modalFormDarkPassword');
  }
}