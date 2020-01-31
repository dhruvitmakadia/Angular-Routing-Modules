import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BreadcruamComponent } from './breadcruam/breadcruam.component';
import { BreadcrumbModule } from 'angular-crumbs';
import { AuthService } from './guard/auth.service';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, BreadcruamComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    FormsModule,
    BreadcrumbModule,
    ReactiveFormsModule
  ],
  providers: [AuthService],
  exports: [FooterComponent, HeaderComponent, BreadcruamComponent]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule has already been loaded. You should only import Core modules in the AppModule only.');
    }
  }
}
