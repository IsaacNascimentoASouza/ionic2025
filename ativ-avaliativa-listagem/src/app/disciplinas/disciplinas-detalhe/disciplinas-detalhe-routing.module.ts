import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisciplinasDetalhePage } from './disciplinas-detalhe.page';

const routes: Routes = [
  {
    path: '',
    component: DisciplinasDetalhePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DisciplinasDetalhePageRoutingModule {}
