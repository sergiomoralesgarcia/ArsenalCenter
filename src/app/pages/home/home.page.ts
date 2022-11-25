import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public navCtrl: NavController,) {}

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