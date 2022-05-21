import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdensComponent } from './ordens/ordens.component';

const routes: Routes = [
  {path: '', component: OrdensComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdensRoutingModule { }
