import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../menuitem';
import { MobileState } from '../mobilestate';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  menuitems: MenuItem [] = [
    {routerLinkName: 'recipes', iconName: 'fastfood', itemName: 'Recipes'},
    {routerLinkName: 'shopping-list', iconName: 'list', itemName: 'Shopping List'},
  ];

  constructor(private mobilestate: MobileState) {}

  ngOnInit() {
  }
}
