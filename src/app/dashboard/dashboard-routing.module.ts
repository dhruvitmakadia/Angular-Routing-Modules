import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { PagenotfoundComponent } from '../error/pagenotfound/pagenotfound.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    data: { breadcrumb: 'Dashboard' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
