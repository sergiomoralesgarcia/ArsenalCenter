import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { ConstructionDetailComponent } from 'src/app/core/components/construction-detail/construction-detail.component';
import { Construction } from 'src/app/core/models/costruction.model';
import { ConstructionService } from 'src/app/core/services/cosntruction.service';

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
    private translateService: TranslateService
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
        person:construction
      },
      cssClass:"modal-full-right-side"
    });
    modal.present();
    modal.onDidDismiss().then(result=>{
      if(result && result.data){
        switch(result.data.mode){
          case 'New':
            this.constructionsSvc.addConstruction(result.data.construction);
            break;
          case 'Edit':
            this.constructionsSvc.updateConstruction(result.data.construction);
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
      header: '¿Está seguro de que desear borrar la asignación de tarea?',
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

