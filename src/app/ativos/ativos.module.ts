import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AtivosRoutingModule } from './ativos-routing.module';
import { AtivosComponent } from './cadastro-ativos/ativos.component';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
@NgModule({
  declarations: [
    AtivosComponent
  ],
  imports: [
    CommonModule,
    AtivosRoutingModule,
    InputTextModule,
    InputNumberModule,
    DropdownModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AtivosModule { }
