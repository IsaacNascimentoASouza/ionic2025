import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'tipo-servicos-listagem',
    loadChildren: () => import('./tipo-servicos/tipo-servicos-listagem/tipo-servicos-listagem.module').then( m => m.TipoServicosListagemPageModule)
  },
  {
    path: 'servico-detalhe/:id',
    loadChildren: () => import('./tipo-servicos/servico-detalhe/servico-detalhe.module').then( m => m.ServicoDetalhePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
