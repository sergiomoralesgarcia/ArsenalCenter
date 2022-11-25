import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeaponPage } from './weapon.page';

const routes: Routes = [
  {
    path: '',
    component: WeaponPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeaponPageRoutingModule {}
