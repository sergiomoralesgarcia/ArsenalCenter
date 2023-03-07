import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

language: string = this.translateService.currentLang;

  constructor(public navCtrl: NavController, 
    private translateService: TranslateService, 
    private router: Router) {
  }

  languageChange() {  
    this.translateService.use(this.language);  
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

  openAbout() {
    this.navCtrl.navigateForward("about")
  }
  
}