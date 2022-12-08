import { Component, OnInit } from '@angular/core';
import { IonAccordionGroup } from '@ionic/angular';
import { Accessory } from '../../models/accessory.model';
import { accessoryService } from '../../services/accessory.service';

@Component({
  selector: 'app-accessory-selectable',
  templateUrl: './accessory-selectable.component.html',
  styleUrls: ['./accessory-selectable.component.scss'],
})
export class AccessorySelectableComponent implements OnInit {

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
    console.log(accessory);
    this.selectedAccessory = accessory;
    accordion.value='';
    this.propagateChange(this.selectedAccessory.id);
  }

}

