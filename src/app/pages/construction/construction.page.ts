import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { ConstructionDetailComponent } from 'src/app/core/components/construction-detail/construction-detail.component';
import { Construction } from 'src/app/core/models/costruction.model';
import { accessoryService } from 'src/app/core/services/accessory.service';
import { ConstructionService } from 'src/app/core/services/cosntruction.service';
import { weaponService } from 'src/app/core/services/weapon.service';

@Component({
  selector: 'app-construction',
  templateUrl: './construction.page.html',
  styleUrls: ['./construction.page.scss'],
})
export class ConstructionPage implements OnInit {

  language: string = this.translateService.currentLang;

  constructor(
    private constructionsSvc:ConstructionService,
    private modal:ModalController,
    private alert:AlertController,
    private translateService: TranslateService,
    private weaponSvc: weaponService,
    private accessorySvc: accessoryService
  ) { }

  languageChange() {  
    this.translateService.use(this.language);  
  }

  ngOnInit() {}

  getConstructions(){
    return this.constructionsSvc.getConstructions();
  }

  async presentConstructionForm(construction:Construction){
    const modal = await this.modal.create({
      component:ConstructionDetailComponent,
      componentProps:{
        construction:construction
      },
      cssClass:"modal-full-right-side"
    });
    modal.present();
    modal.onDidDismiss().then(result=>{
      if(result && result.data){
        switch(result.data.mode){
          case 'New':
            //console.log(result.data.constructor)
            var arma = this.weaponSvc.getWeaponById(result.data.constructor.idWeapon) 
            //console.log(arma)
            var accesorio = this.accessorySvc.getAccessoryById(result.data.constructor.idAccessory) 
            //console.log(accesorio) ; 
            if (arma != undefined && accesorio!= undefined){
              var damage = arma?.damage + accesorio?.damage
              var accuracy = arma?.accuracy + accesorio?.accuracy
              var range = arma?.range + accesorio?.range
              var cadence = arma?.cadence + accesorio?.cadence
              var mobility = arma?.mobility + accesorio?.mobility

              this.constructionsSvc.addConstruction(result.data.construction);
            } 
            
            
            
            break;
          case 'Edit':
            this.constructionsSvc.updateConstruction(result.data.constructor);
            break;
          default:
        }
      }
    });
  }

  onEditConstruction(construction: Construction){
    this.presentConstructionForm(construction);
  }

  async onDeleteAlert(construction: Construction){
    const alert = await this.alert.create({
      header: '¿Está seguro de que desear borrar el arma vinculada?',
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
            this.constructionsSvc.deleteConstructionById(construction.id);
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }

  onDeleteConstruction(construction: Construction){
    this.onDeleteAlert(construction);
    
  }

  onNewConstruction(){
    this.presentConstructionForm(null!);
    
  }

}

