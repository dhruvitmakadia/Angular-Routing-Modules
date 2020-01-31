import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TraineeRoutingModule } from './trainee-routing.module';
import { TraineeComponent } from './trainee.component';
import { SharedModule } from '../shared/shared.module';
import { AddComponent } from './add/add.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [TraineeComponent, AddComponent],
  imports: [
    CommonModule,
    TraineeRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [TraineeComponent]
})
export class TraineeModule { }
