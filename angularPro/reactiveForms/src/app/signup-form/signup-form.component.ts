import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsernameValidators } from '../../../../learnDirectives/src/app/signup-form/username.validators';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  form = new FormGroup({
    account: new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        UsernameValidators.cannotContainSpace,
      ],
        UsernameValidators.shouldBeUnique
      ),
      password: new FormControl('', Validators.required),
    }),
  });

  constructor() { }

  ngOnInit() {
  }

  get username() {
    return this.form.get('account.username');
  }
  get password() {
    return this.form.get('account.password');
  }
  login() {
    this.form.setErrors({
      invalidLogin: true
    });
  }
}
