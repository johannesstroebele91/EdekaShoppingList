// TODO delete later

import {Component,  OnInit} from '@angular/core';

@Component({
  selector: 'app-produkte',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  // products = PRODUCTS;
  products = ['Milch', 'Karotten', 'Käse'];
  productName: string;

  constructor() {
  }
  ngOnInit(): void {
  }

  addArticle(form) {
    // this.products.push(this.produktName);
    if (form.valid) {
      this.products.push(form.value.produktName);
    }
  }

  onremoveProduct(productName: string) {
    this.products = this.products.filter(p => p !== productName);
  }

}
