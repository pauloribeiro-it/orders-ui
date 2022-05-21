import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtivosRoutingModule } from './ativos-routing.module';
import { AtivosComponent } from './cadastro-ativos/ativos.component';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [
    AtivosComponent
  ],
  imports: [
    CommonModule,
    AtivosRoutingModule,
    InputTextModule,
    InputNumberModule,
    DropdownModule
  ]
})
export class AtivosModule { }
