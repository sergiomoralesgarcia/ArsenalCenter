import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeaponPageRoutingModule } from './weapon-routing.module';

import { WeaponPage } from './weapon.page';
import { CoreComponentModule } from "../../core/core.module";

import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({
    declarations: [WeaponPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        WeaponPageRoutingModule,
        TranslateModule.forChild({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient]
            }
        }),
        CoreComponentModule,

    ]
})
export class WeaponPageModule { }
