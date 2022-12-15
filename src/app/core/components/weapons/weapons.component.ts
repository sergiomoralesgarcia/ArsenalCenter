import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Sound } from '../../models/sound.model';
import { Weapon } from '../../models/weapon.model';
import { soundService } from '../../services/sound.service';

@Component({
  selector: 'app-weapons',
  templateUrl: './weapons.component.html',
  styleUrls: ['./weapons.component.scss'],
})
export class WeaponsComponent implements OnInit {
    @Output() onEdit = new EventEmitter;
    @Output() onDelete = new EventEmitter;
    weaponData: Weapon
    @Input("weapon") set weapon(n: Weapon) {
      this.weaponData = n;
      console.log(this.weaponData);
      this.sound = this.soundSvc.getSoundById(this.weaponData.idSound)?.sound;
      console.log(this.sound);
      
    }
    
    language: string = this.translateService.currentLang;

    sound: string|undefined = "";
    
    constructor(private translateService: TranslateService,
                private soundSvc: soundService) {
                  
                }

    languageChange() {  
      this.translateService.use(this.language); 
    }

    getSound():Sound{
      var idSound = this.weaponData.idSound;
      if(idSound)
        return this.soundSvc.getSoundById(idSound)!;
      return undefined!;
    }
  
    ngOnInit() {}
  
    onEditClick(){
      this.onEdit.emit(this.weaponData);
    }
  
    onDeleteClick(){
      this.onDelete.emit(this.weaponData);
    }
  }
