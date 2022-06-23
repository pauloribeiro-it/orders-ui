import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroOrdensComponent } from './cadastro-ordens/cadastro-ordens.component';

const routes: Routes = [
  {path: '', component: CadastroOrdensComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdensRoutingModule { }
