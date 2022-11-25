import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccessoryPageRoutingModule } from './accessory-routing.module';

import { AccessoryPage } from './accessory.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccessoryPageRoutingModule
  ],
  declarations: [AccessoryPage]
})
export class AccessoryPageModule {}
