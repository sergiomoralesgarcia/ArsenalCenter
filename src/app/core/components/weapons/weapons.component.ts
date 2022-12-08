import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Weapon } from '../../models/weapon.model';

@Component({
  selector: 'app-weapons',
  templateUrl: './weapons.component.html',
  styleUrls: ['./weapons.component.scss'],
})
export class WeaponsComponent implements OnInit {
    @Output() onEdit = new EventEmitter;
    @Output() onDelete = new EventEmitter;
    @Input() weapon: Weapon;
    
    language: string = this.translateService.currentLang;
    
    constructor(private translateService: TranslateService) { }

    languageChange() {  
      this.translateService.use(this.language); 
    }
  
    ngOnInit() {}
  
    onEditClick(){
      this.onEdit.emit(this.weapon);
    }
  
    onDeleteClick(){
      this.onDelete.emit(this.weapon);
    }
  }
