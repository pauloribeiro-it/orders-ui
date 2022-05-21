import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AtivosModule } from './ativos/ativos.module';
import { OrdensModule } from './ordens/ordens.module';
const routes: Routes = [
  {
      path: 'ativos', loadChildren: () => AtivosModule
  },
  {
      path: 'ordens', loadChildren: () => OrdensModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
