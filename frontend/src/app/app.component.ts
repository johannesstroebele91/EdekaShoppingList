import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // Add name property of the AppComponent class
  name = '';

  title = 'Family Recipes';

  onClick (){
    console.log("hello");
  }
}
