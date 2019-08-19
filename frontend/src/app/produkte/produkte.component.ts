import {Component,  OnInit} from '@angular/core';
import { PRODUKTE } from '../mock-produkte';

@Component({
  selector: 'app-produkte',
  templateUrl: './produkte.component.html',
  styleUrls: ['./produkte.component.scss']
})
export class ProdukteComponent implements OnInit {

  // produkte = PRODUKTE;
  produkte = ['Milch', 'Karotten', 'Käse'];
  produktName: string;

  constructor() {
  }
  ngOnInit(): void {
  }

  hinzufuegenArtikel(form) {
    // this.produkte.push(this.produktName);
    if (form.valid) {
      this.produkte.push(form.value.produktName);
    }
  }

  onremoveProduct(produktName: string) {
    this.produkte = this.produkte.filter(p => p !== produktName);
  }

}



/*  */
