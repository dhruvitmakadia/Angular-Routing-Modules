import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DailyTasksRoutingModule } from './daily-tasks-routing.module';
import { RxjsComponent } from './rxjs/rxjs.component';
import { DailyTasksComponent } from './daily-tasks.component';
import { DirectivePipeComponent } from './directive-pipe/directive-pipe.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ClockModule } from '../../../projects/clock/src/public-api';


@NgModule({
  declarations: [RxjsComponent, DailyTasksComponent, DirectivePipeComponent],
  imports: [
    CommonModule,
    DailyTasksRoutingModule,
    SharedModule,
    FormsModule,
    ClockModule
  ]
})
export class DailyTasksModule { }
