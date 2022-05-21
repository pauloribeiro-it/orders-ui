import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavBarRoutingModule } from './nav-bar-routing.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { TabViewModule } from 'primeng/tabview';
@NgModule({
  declarations: [
    NavBarComponent
  ],
  imports: [
    CommonModule,
    NavBarRoutingModule,
    RouterModule,
    TabViewModule
  ],
  exports: [
    NavBarComponent
  ]
})
export class NavBarModule { }
