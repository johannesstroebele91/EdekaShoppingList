import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  // Array recipes will store several recipes "Recipe[]"
  recipes: Recipe[] = [
    new Recipe('Spaghetti Carbonara', 'Roman style', 'https://cutt.ly/ZwgW8bq')
  ];

  constructor() { }

  ngOnInit() {
  }

}
