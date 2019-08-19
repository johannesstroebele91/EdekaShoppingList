import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../menuitem';
import { BreakpointObserver, BreakpointState} from '@angular/cdk/layout';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  mobileStatus: boolean;
  menuitems: MenuItem [] = [
/*
    {routerLinkName: 'einkaufsliste', iconName: 'list', itemName: 'Shopping List'},
*/
  ];

  constructor(public breakpointObserver: BreakpointObserver) {
  }

  ngOnInit() {
    this.breakpointObserver
      .observe(['(min-width: 599px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          console.log('1. Viewport is desktop - over 599px ');
          this.mobileStatus = false;
        } else {
          console.log('2. Viewport is mobile - under 599px');
          this.mobileStatus = true;
        }
      });
  }
}
