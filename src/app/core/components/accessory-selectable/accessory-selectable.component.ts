import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IonAccordionGroup } from '@ionic/angular';
import { Accessory } from '../../models/accessory.model';
import { accessoryService } from '../../services/accessory.service';

export const ACCESSORY_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => AccessorySelectableComponent),
  multi: true
};

@Component({
  selector: 'app-accessory-selectable',
  templateUrl: './accessory-selectable.component.html',
  styleUrls: ['./accessory-selectable.component.scss'],
  providers: [ACCESSORY_VALUE_ACCESSOR],
})
export class AccessorySelectableComponent implements OnInit, ControlValueAccessor {

  selectedAccessory:Accessory=null!;
  propagateChange = (_: any) => { }
  isDisabled:boolean = false;

  constructor(
    private accessorySvc:accessoryService
  ) { }

  writeValue(obj: any): void {
    this.selectedAccessory = this.accessorySvc.getAccessoryById(obj)!;
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

  getAccessory(){
    return this.accessorySvc.getAccessory();
  } 

  onAccessoryClicked(accessory:Accessory, accordion:IonAccordionGroup){
    //console.log(accessory);
    this.selectedAccessory = accessory;
    accordion.value='';
    this.propagateChange(this.selectedAccessory.id);
  }

}

