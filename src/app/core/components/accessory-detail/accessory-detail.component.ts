import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CheckboxCustomEvent, ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Accessory } from '../../models/accessory.model';

@Component({
  selector: 'app-accessory-detail',
  templateUrl: './accessory-detail.component.html',
  styleUrls: ['./accessory-detail.component.scss'],
})
export class AccessoryDetailComponent implements OnInit {

  form:FormGroup;
  mode:"New" | "Edit" = "New";
  @Input('accessory') set accessory(accessory:Accessory){
    if(accessory){
      this.form.controls['id'].setValue(accessory.id);
      this.form.controls['name'].setValue(accessory.name);
      this.form.controls['type'].setValue(accessory.type);
      this.form.controls['damage'].setValue(accessory.damage);
      this.form.controls['accuracy'].setValue(accessory.accuracy);
      this.form.controls['range'].setValue(accessory.range);
      this.form.controls['cadence'].setValue(accessory.cadence);
      this.form.controls['mobility'].setValue(accessory.mobility);
      this.form.controls['image'].setValue(accessory.image);
      this.mode = "Edit";
    }
  }
  
  language: string = this.translateService.currentLang;

  constructor(
    private fb:FormBuilder,
    private modal:ModalController,
    private translateService: TranslateService
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

  languageChange() {  
    this.translateService.use(this.language); 
  }

  canDismiss = false;
  presentingElement = null;




  ngOnInit() {
  }

  onTermsChanged(event: Event) {
    const ev = event as CheckboxCustomEvent;
    this.canDismiss = ev.detail.checked;
  }

  onSubmit(){
    this.modal.dismiss({accessory: this.form.value, mode:this.mode}, 'ok');
  }

  onDismiss(){
    this.modal.dismiss(null, 'cancel');
  }

}

