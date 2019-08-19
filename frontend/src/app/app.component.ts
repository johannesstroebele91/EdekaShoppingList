import {Component, OnInit} from '@angular/core';
import {BreakpointObserver, BreakpointState} from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {



  mobileStatus: boolean;

  onAddProduct() {

  }

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
