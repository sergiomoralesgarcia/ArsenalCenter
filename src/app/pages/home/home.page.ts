import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

language: string = this.translateService.currentLang;

  constructor(public navCtrl: NavController, private translateService: TranslateService) {
  }

  languageChange() {  // add this
    this.translateService.use(this.language);  // add this
  }

  openWeapon() {
      this.navCtrl.navigateForward("weapon")
    }

  openAccessory() {
    this.navCtrl.navigateForward("accessory")
  }

  openConstruct() {
    this.navCtrl.navigateForward("construction")
  }
  
}