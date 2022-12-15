import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Accessory } from '../../models/accessory.model';
import { Construction } from '../../models/costruction.model';
import { Weapon } from '../../models/weapon.model';
import { accessoryService } from '../../services/accessory.service';
import { ConstructionService } from '../../services/cosntruction.service';
import { weaponService } from '../../services/weapon.service';

@Component({
  selector: 'app-constructions',
  templateUrl: './constructions.component.html',
  styleUrls: ['./constructions.component.scss'],
})
export class ConstructionsComponent implements OnInit {

  @Output() onEdit = new EventEmitter;
  @Output() onDelete = new EventEmitter;
  @Input() construction:Construction;

  constructor(
    private weaponSvc: weaponService,
    private accessorySvc:accessoryService,
    private constructionsSvc:ConstructionService
  ){
  }

  ngOnInit(
  ) {}

  getWeapon():Weapon{
    var idWeapon = this.construction.idWeapon;
    if(idWeapon)
      return this.weaponSvc.getWeaponById(idWeapon)!;
    return undefined!;
  }

  getAccessory():Accessory{
    //console.log(new Date().toISOString());
    var accessoryId = this.construction.idAccessory;
    if(accessoryId)
      return this.accessorySvc.getAccessoryById(accessoryId)!;
      return undefined!;
  }

  onEditClick(){
    this.onEdit.emit(this.construction);
  }

  onDeleteClick(){
    this.onDelete.emit(this.construction);
  }
}
