import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { WeaponDetailComponent } from 'src/app/core/components/weapon-detail/weapon-detail.component';
import { Weapon } from 'src/app/core/models/weapon.model';
import { weaponService } from 'src/app/core/services/weapon.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-weapon',
  templateUrl: './weapon.page.html',
  styleUrls: ['./weapon.page.scss'],
})
export class WeaponPage implements OnInit {

  language: string = this.translateService.currentLang;

  constructor(private gun:weaponService,
    private alert:AlertController,
    private modal: ModalController,
    private weaponService:weaponService, 
    private translateService: TranslateService) { }

    languageChange() {  
      this.translateService.use(this.language); 
    }

  ngOnInit() {
  }
  
  getWeapon(){ 
    return this.gun.getWeapon(); 
  }

  async presentWeaponForm(weapon:Weapon){
    const modal = await this.modal.create ({
      component:WeaponDetailComponent,
      componentProps:{
        weapon:weapon
      }
    });
    modal.present();
    modal.onDidDismiss().then(result=>{
      if(result && result.data){
        switch(result.data.mode){
          case 'New':
            this.weaponService.addWeapon(result.data.weapon);
            break;
          case 'Edit':
            this.weaponService.updateWeapon(result.data.weapon);
            break;
          default:
        }
      }
    });
  }
  
  onNewWeapon(){
    this.presentWeaponForm(null!);
    
  }

  onEditWeapon(weapon: Weapon){
    this.presentWeaponForm(weapon);
  }

  async onDeleteAlert(weapon: Weapon){
    const alert = await this.alert.create({
      header: 'Are you sure that you want delete the weapon?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log("Operacion cancelada");
          },
        },
        {
          text: 'Borrar',
          role: 'confirm',
          handler: () => {
            this.weaponService.deleteWeaponById(weapon.id);
          },
        },
      ],
    });
    await alert.present();

  }

  async onWeaponExistsAlert(){
    const alert = await this.alert.create({
      header: 'Error',
      message: 'No es posible borrar el arma porque está asignada a un accesorio',
      buttons: [
        {
          text: 'Cerrar',
          role: 'close',
          handler: () => {
            
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }

  
  onDeleteWeapon(weapon: Weapon){
      this.onDeleteAlert(weapon);
  }
}

