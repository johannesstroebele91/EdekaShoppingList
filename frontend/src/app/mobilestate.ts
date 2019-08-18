import {OnInit} from '@angular/core';
import {BreakpointObserver, BreakpointState} from '@angular/cdk/layout';

export class MobileState implements OnInit {

  mobileScreen = false;

  constructor(public breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.breakpointObserver
      .observe(['(min-width: 5990px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          console.log('Viewport is 599px or over!');
          console.log(this.mobileScreen);
          this.mobileScreen = false;
        } else {
          console.log('Viewport is under 599px!');
          console.log(this.mobileScreen);
          this.mobileScreen = true;
        }
      });
  }
}
