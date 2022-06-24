import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrdensRoutingModule } from './ordens-routing.module';
import { CadastroOrdensComponent } from './cadastro-ordens/cadastro-ordens.component';
import {InputNumberModule} from 'primeng/inputnumber';
import {CalendarModule} from 'primeng/calendar';
@NgModule({
  declarations: [
    CadastroOrdensComponent
  ],
  imports: [
    CommonModule,
    OrdensRoutingModule,
    InputNumberModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule
  ]
})
export class OrdensModule { }
