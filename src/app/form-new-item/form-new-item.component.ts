import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form-new-item',
  templateUrl: './form-new-item.component.html',
  styleUrls: ['./form-new-item.component.css'],
})
export class FormNewItemComponent implements OnInit {
  @Input() label!: string;
  @Input() className = 'btn-primary';

  @Output() newItemEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onAddItem(item: string) {
    console.log('Item ->', item);
    this.newItemEvent.emit(item)
  }
}
  