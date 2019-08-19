import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-produkt',
  templateUrl: './produkt.component.html',
  styleUrls: ['./produkt.component.scss']
})
export class ProduktComponent implements OnInit {

  @Input() produktName: string;
  @Output() produktClicked = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClicked() {
    this.produktClicked.emit();
  }

}
