import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IsCheckedGuard } from './core/guard/is-checked.guard';
import { LoginComponent } from './login/login.component';
import { PreLoadingService } from './core/pre-loading.service';
import { PagenotfoundComponent } from './error/pagenotfound/pagenotfound.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: '404',
    component: PagenotfoundComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [IsCheckedGuard],
    data: { preload: true , breadcrumb: 'Dashboard' }
  },
  {
    path: 'employee',
    loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule),
    canActivate: [IsCheckedGuard],
    data: { breadcrumb: 'Employee' }
  },
  {
    path: 'trainee',
    loadChildren: () => import('./trainee/trainee.module').then(m => m.TraineeModule),
    canActivate: [IsCheckedGuard],
    data: { breadcrumb: 'Trainee' }
  },
  {
    path: 'dailytasks',
    loadChildren: () => import('./daily-tasks/daily-tasks.module').then(m => m.DailyTasksModule),
    canActivate: [IsCheckedGuard],
    data: { breadcrumb: 'Daily Tasks' }
  },
  {
    path: 'changepassword',
    component: ChangePasswordComponent,
    canActivate: [IsCheckedGuard],
    data: { breadcrumb: 'Change Password' }
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
