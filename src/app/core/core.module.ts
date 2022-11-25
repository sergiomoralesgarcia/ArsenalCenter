import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { WeaponsComponent } from './components/weapons/weapons.component';
import { WeaponDetailComponent } from './components/weapon-detail/weapon-detail.component';
import { WeaponPageRoutingModule } from '../pages/weapon/weapon-routing.module';


@NgModule({
    imports: [ CommonModule, FormsModule, IonicModule, RouterModule, WeaponPageRoutingModule, ReactiveFormsModule],
    declarations: [WeaponsComponent, WeaponDetailComponent],
    exports: [WeaponsComponent, WeaponDetailComponent]
})

export class CoreComponentModule {}