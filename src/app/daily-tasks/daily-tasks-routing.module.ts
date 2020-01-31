import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DailyTasksComponent } from './daily-tasks.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { DirectivePipeComponent } from './directive-pipe/directive-pipe.component';


const routes: Routes = [
  {
    path: '',
    component: DailyTasksComponent,
    data: { breadcrumb: 'Daily Tasks' },
    children: [
      {
        path: 'rxjs',
        component: RxjsComponent,
        data: { breadcrumb: 'RxJS' }
      },
      {
        path: 'dirpipe',
        component: DirectivePipeComponent,
        data: { breadcrumb: 'Directive & Pipe' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DailyTasksRoutingModule { }
