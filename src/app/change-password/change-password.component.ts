import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ApiService } from '../core/apiservice/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  changePasswordForm: FormGroup;
  constructor(private fb: FormBuilder, private api: ApiService, private route: Router) {
    this.changePasswordForm = this.fb.group({
      newpassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmpassword: ['', [Validators.required]]
    });
  }

  get newpassword() { return this.changePasswordForm.get('newpassword'); }
  get confirmpassword() { return this.changePasswordForm.get('confirmpassword'); }

  ngOnInit() {
    this.changePasswordForm.valueChanges.subscribe(control => {
      if (control.newpassword !== control.confirmpassword) {
        this.confirmpassword.setErrors({ mustMatch: true });
      } else {
        this.confirmpassword.setErrors(null);
      }
    });
  }
  onSubmit() {
    if (localStorage.getItem('usertype') === 'Admin') {
      this.api.updateEmployeeData(localStorage.getItem('uid'), { password: this.newpassword.value });
      this.route.navigate(['dashboard']);
      alert('Password changed...');
    } else {
      this.api.updateTraineeData(localStorage.getItem('uid'), { password: this.newpassword.value });
      this.route.navigate(['dashboard']);
      alert('Password changed...');
    }

  }
}
