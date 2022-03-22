import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  @Output() sendLoginForm = new EventEmitter<{username: string, password: string}>();
  public form: FormGroup;
  public flatlogicEmail = 'admin';
  public flatlogicPassword = 'test';

  public ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(this.flatlogicEmail, [Validators.required]),
      password: new FormControl(this.flatlogicPassword, [Validators.required])
    });
  }

  public login(): void {
    if (this.form.valid) {
      var email = this.form.controls['email'].value;
      var password = this.form.controls['password'].value;
      this.sendLoginForm.emit({username: email, password: password});
    }
  }
}
