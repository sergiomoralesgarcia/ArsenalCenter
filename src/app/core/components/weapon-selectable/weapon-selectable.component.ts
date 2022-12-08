import { Component, OnInit } from '@angular/core';
import { IonAccordionGroup } from '@ionic/angular';
import { Weapon } from '../../models/weapon.model';
import { weaponService } from '../../services/weapon.service';

@Component({
  selector: 'app-weapon-selectable',
  templateUrl: './weapon-selectable.component.html',
  styleUrls: ['./weapon-selectable.component.scss'],
})
export class WeaponSelectableComponent implements OnInit {

  selectedWeapon:Weapon=null!;
  propagateChange = (_: any) => { }
  isDisabled:boolean = false;

  constructor(
    private weaponSvc:weaponService
  ) { }

  writeValue(obj: any): void {
    this.selectedWeapon = this.weaponSvc.getWeaponById(obj)!;
  }
  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  registerOnTouched(fn: any): void {
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  ngOnInit() {}

  getPeople(){
    return this.weaponSvc.getWeapon();
  } 

  getTime(){ //Devuelve la fecha
    return this.selectedWeapon;
  }

  onWeaponClicked(weapon:Weapon, accordion:IonAccordionGroup){
    console.log(weapon);
    this.selectedWeapon = weapon;
    accordion.value='';
    this.propagateChange(this.selectedWeapon.id);
  }

}
