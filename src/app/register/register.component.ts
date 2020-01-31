import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../core/apiservice/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  data: object;
  constructor(private route: Router, private fb: FormBuilder, private api: ApiService) { }

  registerForm = this.fb.group({
    name: ['', [Validators.required]],
    mobile: ['', [Validators.required]],
    email: ['', [Validators.required]],
    domain: ['', [Validators.required]],
    password: ['', [Validators.required]],
    confirm: ['', [Validators.required]]
  });

  get rf() { return this.registerForm.value; }

  ngOnInit() {
    this.registerForm.valueChanges.subscribe(control => {
      if (control.password !== control.confirm) {
        this.rf.confirm.setErrors({ mustMatch: true });
      } else {
        this.rf.confirm.setErrors(null);
      }
    });
  }

  onSubmit() {
    this.data = {
      name: this.registerForm.get('name').value,
      mobile: this.registerForm.get('mobile').value,
      email: this.registerForm.get('email').value,
      domain: this.registerForm.get('domain').value,
      password: this.registerForm.get('password').value
    };
    this.api.addEmployeeData(this.data);
    this.route.navigate(['login']);
    alert('Registration Successful...Login To Continue...');
  }

  goToLogin() {
    this.route.navigate(['login']);
  }
}
