import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdensRoutingModule } from './ordens-routing.module';
import { OrdensComponent } from './ordens/ordens.component';


@NgModule({
  declarations: [
    OrdensComponent
  ],
  imports: [
    CommonModule,
    OrdensRoutingModule
  ]
})
export class OrdensModule { }
