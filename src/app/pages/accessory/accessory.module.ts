import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccessoryPageRoutingModule } from './accessory-routing.module';

import { AccessoryPage } from './accessory.page';
import { CoreComponentModule } from "../../core/core.module";

@NgModule({
    declarations: [AccessoryPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AccessoryPageRoutingModule,
        CoreComponentModule
    ]
})
export class AccessoryPageModule {}
