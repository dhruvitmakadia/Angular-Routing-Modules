import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import { AddComponent } from './add/add.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeeComponent,
    data: { breadcrumb: 'Employee' },
    children: [
      {
        path: 'add',
        component: AddComponent,
        data: { breadcrumb: 'Add' }
      },
      {
        path: ':id',
        component: AddComponent,
        data: { breadcrumb: 'Edit' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
