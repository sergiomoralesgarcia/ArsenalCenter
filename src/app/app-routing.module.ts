import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'weapon',
    loadChildren: () => import('./pages/weapon/weapon.module').then( m => m.WeaponPageModule)
  },
  {
    path: 'accessory',
    loadChildren: () => import('./pages/accessory/accessory.module').then( m => m.AccessoryPageModule)
  },
  {
    path: 'construction',
    loadChildren: () => import('./pages/construction/construction.module').then( m => m.ConstructionPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
