import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ApiService } from 'src/app/core/apiservice/api.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private location: Location, private api: ApiService) { }
  id;
  employee;
  employeeAddForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    mobile: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
    email: ['', Validators.required],
    domain: ['', Validators.required]
  });



  get name() { return this.employeeAddForm.get('name'); }
  get mobile() { return this.employeeAddForm.get('mobile'); }

  ngOnInit() {
    if (this.route.snapshot.paramMap.get('id')) {
      this.id = this.route.snapshot.paramMap.get('id');
      this.api.getOneEmployeeData(this.id).subscribe(data => {
        this.employee = data;
        this.employeeAddForm.setValue({
          name: this.employee.name,
          mobile: this.employee.mobile,
          email: this.employee.email,
          domain: this.employee.domain
        });
      });
    }
  }

  onSubmit() {
    if (this.route.snapshot.paramMap.get('id')) {
      this.location.back();
      this.api.updateEmployeeData(this.id, this.employeeAddForm.value);
    } else {
      this.location.back();
      this.api.addEmployeeData(this.employeeAddForm.value);
    }
  }

}
