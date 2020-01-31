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

  id;
  trainee;

  constructor(private api: ApiService, private fb: FormBuilder, private route: ActivatedRoute, private location: Location) { }

  traineeAddForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    mobile: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
    email: ['', Validators.required],
    domain: ['', Validators.required]
  });



  get name() { return this.traineeAddForm.get('name'); }
  get mobile() { return this.traineeAddForm.get('mobile'); }

  ngOnInit() {
    if (this.route.snapshot.paramMap.get('id')) {
      this.id = this.route.snapshot.paramMap.get('id');
      this.api.getOneTraineeData(this.id).subscribe(data => {
        this.trainee = data;
        this.traineeAddForm.setValue({
          name: this.trainee.name,
          mobile: this.trainee.mobile,
          email: this.trainee.email,
          domain: this.trainee.domain
        });
      });
    }
  }
  onSubmit() {
    if (this.route.snapshot.paramMap.get('id')) {
      this.location.back();
      this.api.updateTraineeData(this.id, this.traineeAddForm.value);
    } else {
      this.location.back();
      this.api.addTraineeData(this.traineeAddForm.value);
    }
  }
}
