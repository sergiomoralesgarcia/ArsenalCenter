import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IonAccordionGroup } from '@ionic/angular';
import { Sound } from '../../models/sound.model';
import { soundService } from '../../services/sound.service';

export const SOUND_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SoundSelectableComponent),
  multi: true
};

@Component({
  selector: 'app-sound-selectable',
  templateUrl: './sound-selectable.component.html',
  styleUrls: ['./sound-selectable.component.scss'],
  providers: [SOUND_VALUE_ACCESSOR],
})
export class SoundSelectableComponent implements OnInit, ControlValueAccessor {

  selectedSound:Sound=null!;
  propagateChange = (_: any) => { }
  isDisabled:boolean = false;

  constructor(
    private soundSvc:soundService
  ) { }

  writeValue(obj: any): void {
    this.selectedSound = this.soundSvc.getSoundById(obj)!;
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

  getSound(){
    return this.soundSvc.getSound();
  } 

  onSoundClicked(sound:Sound, accordion:IonAccordionGroup){
    this.selectedSound = sound;
    accordion.value='';
    this.propagateChange(this.selectedSound.id);
  }

}
