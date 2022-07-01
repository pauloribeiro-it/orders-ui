import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AtivosRoutingModule } from './ativos-routing.module';
import { AtivosComponent } from './cadastro-ativos/ativos.component';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import {TableModule} from 'primeng/table';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';

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
    ReactiveFormsModule,
    ToastModule,
    TableModule,
    ConfirmDialogModule
  ]
})
export class AtivosModule { }
