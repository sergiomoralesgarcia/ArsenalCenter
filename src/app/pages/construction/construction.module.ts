import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConstructionPageRoutingModule } from './construction-routing.module';

import { ConstructionPage } from './construction.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConstructionPageRoutingModule
  ],
  declarations: [ConstructionPage]
})
export class ConstructionPageModule {}
