import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { WeaponsComponent } from './components/weapons/weapons.component';
import { WeaponDetailComponent } from './components/weapon-detail/weapon-detail.component';
import { WeaponPageRoutingModule } from '../pages/weapon/weapon-routing.module';
import { AccessoryPageRoutingModule } from '../pages/accessory/accessory-routing.module';
import { AccessoriesComponent } from './components/accessories/accessories.component';
import { AccessoryDetailComponent } from './components/accessory-detail/accessory-detail.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}


@NgModule({
    imports: [ CommonModule, FormsModule, IonicModule, RouterModule, WeaponPageRoutingModule, ReactiveFormsModule, AccessoryPageRoutingModule, TranslateModule.forChild({
        loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
        }
    })],
    declarations: [WeaponsComponent, WeaponDetailComponent, AccessoriesComponent, AccessoryDetailComponent],
    exports: [WeaponsComponent, WeaponDetailComponent, AccessoriesComponent, AccessoryDetailComponent]
})

export class CoreComponentModule {}