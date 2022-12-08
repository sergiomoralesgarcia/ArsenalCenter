import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Accessory } from '../../models/accessory.model';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.scss'],
})
export class AccessoriesComponent implements OnInit {

  @Output() onEdit = new EventEmitter;
  @Output() onDelete = new EventEmitter;
  @Input() accessory: Accessory;

  language: string = this.translateService.currentLang;

  constructor(private translateService: TranslateService) { }

  languageChange() {  
    this.translateService.use(this.language); 
  }

  ngOnInit() { }

  onEditClick() {
    this.onEdit.emit(this.accessory);
  }

  onDeleteClick() {
    this.onDelete.emit(this.accessory);
  }
}
