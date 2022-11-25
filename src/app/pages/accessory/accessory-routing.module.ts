import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccessoryPage } from './accessory.page';

const routes: Routes = [
  {
    path: '',
    component: AccessoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccessoryPageRoutingModule {}
