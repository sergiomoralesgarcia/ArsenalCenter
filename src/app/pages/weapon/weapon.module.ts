import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeaponPageRoutingModule } from './weapon-routing.module';

import { WeaponPage } from './weapon.page';
import { CoreComponentModule } from "../../core/core.module";

@NgModule({
    declarations: [WeaponPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        WeaponPageRoutingModule,
        CoreComponentModule
    ]
})
export class WeaponPageModule {}
