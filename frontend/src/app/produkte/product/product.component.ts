// TODO delete later

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  // To get data from outside -> make it bindable from the outside
  @Input() productName: string;
  @Output() productClicked = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClicked() {
    this.productClicked.emit();
  }
}
