import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { TableComponent } from './table/table.component';
import { ModelComponent } from './model/model.component';
import { AutofocusDirective } from './directives/autofoucs.directive';
import { HighlightDirective } from './directives/highlight.directive';
import { MyifDirective } from './directives/myif.directive';
import { ConvertCurrencyPipe } from './pipes/convert-currency.pipe';
import { OnlynumberDirective } from './directives/onlynumber.directive';


@NgModule({
  declarations: [
    TableComponent,
    ModelComponent,
    AutofocusDirective,
    HighlightDirective,
    MyifDirective,
    ConvertCurrencyPipe,
    OnlynumberDirective
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    TableComponent,
    ModelComponent,
    AutofocusDirective,
    HighlightDirective,
    MyifDirective,
    ConvertCurrencyPipe,
    OnlynumberDirective
  ]
})
export class SharedModule { }
