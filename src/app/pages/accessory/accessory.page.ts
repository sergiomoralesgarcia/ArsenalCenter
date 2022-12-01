import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { AccessoryDetailComponent } from 'src/app/core/components/accessory-detail/accessory-detail.component';
import { Accessory } from 'src/app/core/models/accessory.model';
import { accessoryService } from 'src/app/core/services/accessory.service';

@Component({
  selector: 'app-accessory',
  templateUrl: './accessory.page.html',
  styleUrls: ['./accessory.page.scss'],
})
export class AccessoryPage implements OnInit {

  constructor(private gun:accessoryService,
    private alert:AlertController,
    private modal: ModalController,
    private accessoryService:accessoryService,) { }

  ngOnInit() {
  }
  
  getAccessory(){ 
    return this.gun.getAccessory(); 
  }

  async presentAccessoryForm(accessory:Accessory){
    const modal = await this.modal.create ({
      component:AccessoryDetailComponent,
      componentProps:{
        accessory:accessory
      }
    });
    modal.present();
    modal.onDidDismiss().then(result=>{
      if(result && result.data){
        switch(result.data.mode){
          case 'New':
            this.accessoryService.addAccessory(result.data.accessory);
            break;
          case 'Edit':
            this.accessoryService.updateAccessory(result.data.accessory);
            break;
          default:
        }
      }
    });
  }
  
  onNewAccessory(){
    this.presentAccessoryForm(null!);
    
  }

  onEditAccessory(accessory: Accessory){
    this.presentAccessoryForm(accessory);
  }

  async onDeleteAlert(accessory: Accessory){
    const alert = await this.alert.create({
      header: '¿Está seguro de que desear borrar a la persona?',
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
            this.accessoryService.deleteAccessoryById(accessory.id);
          },
        },
      ],
    });
    await alert.present();

  }

  async onAccessoryExistsAlert(){
    const alert = await this.alert.create({
      header: 'Error',
      message: 'No es posible borrar la persona porque está asignada a una tarea',
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

  
  onDeleteAccessory(accessory: Accessory){
      this.onDeleteAlert(accessory);
  }
}
