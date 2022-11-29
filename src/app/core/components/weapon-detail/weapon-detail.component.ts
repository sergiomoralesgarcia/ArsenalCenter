import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Weapon } from '../../models/weapon.model';

@Component({
  selector: 'app-weapon-detail',
  templateUrl: './weapon-detail.component.html',
  styleUrls: ['./weapon-detail.component.scss'],
})
export class WeaponDetailComponent implements OnInit {

  form:FormGroup;
  mode:"New" | "Edit" = "New";
  @Input('weapon') set weapon(weapon:Weapon){
    if(weapon){
      this.form.controls['id'].setValue(weapon.id);
      this.form.controls['name'].setValue(weapon.name);
      this.form.controls['type'].setValue(weapon.type);
      this.form.controls['damage'].setValue(weapon.damage);
      this.form.controls['accuracy'].setValue(weapon.accuracy);
      this.form.controls['range'].setValue(weapon.range);
      this.form.controls['cadence'].setValue(weapon.cadence);
      this.form.controls['mobility'].setValue(weapon.mobility);
      this.form.controls['image'].setValue(weapon.image);
      this.mode = "Edit";
    }
  }
  

  constructor(
    private fb:FormBuilder,
    private modal:ModalController
  ) { 
    this.form = this.fb.group({
      id:[null],
      name:['', [Validators.required]],
      type:['', [Validators.required]],
      damage:['', [Validators.required]],
      accuracy:['', [Validators.required]],
      range:['', [Validators.required]],
      cadence:['', [Validators.required]],
      mobility:['', [Validators.required]],
      image:['']
    });
  }
  ngOnInit() {

  }

  onSubmit(){
    this.modal.dismiss({weapon: this.form.value, mode:this.mode}, 'ok');
  }

  onDismiss(){
    this.modal.dismiss(null, 'cancel');
  }

}
