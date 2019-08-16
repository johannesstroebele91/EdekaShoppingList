import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../menuitem';
import {BreakpointObserver} from '@angular/cdk/layout';

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

  constructor(public breakpointObserver: BreakpointObserver) {}

  mobileScreen = this.breakpointObserver.isMatched('(max-width: 599px)');

  ngOnInit() {

    this.breakpointObserver.observe([
      '(min-width: 599px)'
    ]).subscribe(result => {
      if (result.matches) {
          this.mobileScreen = true;
          console.log(this.mobileScreen);
      } else {
        this.mobileScreen = false;
        console.log(this.mobileScreen);
      }
    });
  }
}
