//import { BocaoPage } from '../bocao/bocao.page';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {
    path: 'compras',
    loadChildren: () => import('./compras/compras.module').then( m => m.ComprasPageModule)
  },
 
];

@NgModule({
  //entryComponents:[BocaoPage],
  imports: [
  RouterModule.forChild(routes),
  //BocaoPage
  ],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
