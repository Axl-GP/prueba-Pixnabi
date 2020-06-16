import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./Sign/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./Sign/auth/auth.module').then( m => m.AuthPageModule)
  },
  {
    path: 'compras',
    loadChildren: () => import('./tab1/compras/compras.module').then( m => m.ComprasPageModule)
  },
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
