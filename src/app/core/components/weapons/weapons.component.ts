import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
    
    
    constructor() { }
  
    ngOnInit() {}
  
    onEditClick(){
      this.onEdit.emit(this.weapon);
    }
  
    onDeleteClick(){
      this.onDelete.emit(this.weapon);
    }
  }
