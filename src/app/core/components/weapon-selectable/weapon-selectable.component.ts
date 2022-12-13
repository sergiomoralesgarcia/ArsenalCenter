import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IonAccordionGroup } from '@ionic/angular';
import { Weapon } from '../../models/weapon.model';
import { weaponService } from '../../services/weapon.service';

export const WEAPON_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => WeaponSelectableComponent),
  multi: true
};


@Component({
  selector: 'app-weapon-selectable',
  templateUrl: './weapon-selectable.component.html',
  styleUrls: ['./weapon-selectable.component.scss'],
  providers: [WEAPON_VALUE_ACCESSOR],
})
export class WeaponSelectableComponent implements OnInit, ControlValueAccessor {

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

  getWeapon(){
    return this.weaponSvc.getWeapon();
  } 


  onWeaponClicked(weapon:Weapon, accordion:IonAccordionGroup){
    this.selectedWeapon = weapon;
    accordion.value='';
    this.propagateChange(this.selectedWeapon.id);
  }

}
