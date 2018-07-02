import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalidCredentialMsg: string;
  constructor(private router: Router) {
  }
  loginForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });


  ngOnInit() {
  }
  onFormSubmit() {
    const uname = this.loginForm.get('username').value;
    const pwd = this.loginForm.get('password').value;
    if (uname === 'admin' && pwd === 'admin') {
      this.router.navigate(['/article']);
    }
  }
}
