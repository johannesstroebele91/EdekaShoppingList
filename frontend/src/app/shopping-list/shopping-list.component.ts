import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient [] = [
    new Ingredient('Apples', 'pc', 5),
    new Ingredient('Tomatoes', 'pc', 3),
    new Ingredient('Banana', 'pc' , 1)
  ];

  constructor() { }

  ngOnInit() {
  }

}
