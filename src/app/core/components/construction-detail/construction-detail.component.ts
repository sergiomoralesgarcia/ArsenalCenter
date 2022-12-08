import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Construction } from '../../models/costruction.model';
import { accessoryService } from '../../services/accessory.service';
import { weaponService } from '../../services/weapon.service';

@Component({
  selector: 'app-construction-detail',
  templateUrl: './construction-detail.component.html',
  styleUrls: ['./construction-detail.component.scss'],
})
export class ConstructionDetailComponent implements OnInit {

  form: FormGroup;
  mode: "New" | "Edit" = "New";
  @Input('construction') set construction(construct: Construction) {
    if (construct) {
      this.form.controls['id'].setValue(construct.id);
      this.form.controls['idWeapon'].setValue(construct.id);
      this.form.controls['idAccessory'].setValue(construct.id);
      this.form.controls['damage'].setValue(construct.damage);
      this.form.controls['accuracy'].setValue(construct.accuracy);
      this.form.controls['range'].setValue(construct.range);
      this.form.controls['cadence'].setValue(construct.cadence);
      this.form.controls['mobility'].setValue(construct.mobility);
      this.mode = "Edit";
    }
  }

  constructor(
    private fb: FormBuilder,
    private modal: ModalController,
    private weaponSVC:weaponService,
    private accessorySVC:accessoryService,
    private translateService: TranslateService
  ) {
    this.form = this.fb.group({
      id: [null],
      idTask: [0, [Validators.min(1)]],
      idPerson: [0, [Validators.min(1)]],
      dateAndTime: ['', [Validators.required]],
    });
  }

  language: string = this.translateService.currentLang;

  languageChange() {  
    this.translateService.use(this.language);  
  }

  ngOnInit() {

  }

  onSubmit(){
    
    this.modal.dismiss({constructor: this.form.value, mode:this.mode}, 'ok');
  }

  onDismiss(){
    this.modal.dismiss(null, 'cancel');
  }

  getWeapon(){
    return this.weaponSVC.getWeapon();
  }

  getAccessory(){
    return this.accessorySVC.getAccessory();
  }
}
