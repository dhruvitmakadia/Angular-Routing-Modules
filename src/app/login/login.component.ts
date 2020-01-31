import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../core/guard/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private route: Router, private fb: FormBuilder, private auth: AuthService) { }

  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  get username() { return this.loginForm.get('username').value; }
  get password() { return this.loginForm.get('password').value; }

  ngOnInit() {
    this.auth.run();
  }

  onSubmit() {
    localStorage.setItem('token', `AshjhsvdjgJGVUvxjjMvbjhxbjVBJHMcvbjhjbjhKBJHCVJHmBJHvbJIHVBxj`);
    localStorage.setItem('username', this.loginForm.get('username').value);
    localStorage.setItem('password', this.loginForm.get('password').value);
    if (this.auth.isAuthenticated() === true) {
      this.route.navigate(['dashboard']);
    } else {
      this.route.navigate(['login']);
      alert('Invalid Username Or Password..');
    }

  }
  goToRegister() {
    this.route.navigate(['register']);
  }
}
