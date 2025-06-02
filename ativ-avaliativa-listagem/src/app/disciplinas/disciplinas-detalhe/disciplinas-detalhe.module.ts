import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DisciplinasDetalhePageRoutingModule } from './disciplinas-detalhe-routing.module';

import { DisciplinasDetalhePage } from './disciplinas-detalhe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DisciplinasDetalhePageRoutingModule
  ],
  declarations: [DisciplinasDetalhePage]
})
export class DisciplinasDetalhePageModule {}
