import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TraineeComponent } from './trainee.component';
import { AddComponent } from './add/add.component';


const routes: Routes = [
  {
    path: '',
    component: TraineeComponent,
    data: { breadcrumb: 'Trainee' },
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
export class TraineeRoutingModule { }
