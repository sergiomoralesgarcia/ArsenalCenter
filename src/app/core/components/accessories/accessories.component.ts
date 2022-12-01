import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  constructor() { }

  ngOnInit() { }

  onEditClick() {
    this.onEdit.emit(this.accessory);
  }

  onDeleteClick() {
    this.onDelete.emit(this.accessory);
  }
}
