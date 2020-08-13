import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';

function compareEmail(email) {
  return email == "vu@gmail.com";
}

function comparePassword(password) {
  return password == "123123";
}

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  signInForm: FormGroup

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.signInForm = this.formBuilder.group({
      email: ['',  [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  show:boolean = false;

  submit() {
    if (compareEmail(this.signInForm.value.email) && comparePassword(this.signInForm.value.password)) {
      this.show = !this.show;
    } else {
      alert("Wrong email or password");
    }
  }

}
