import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: '<app-root>',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  
  public title: String = "first-ng-app";
  
  constructor() {
    console.log("app component > constructor");
  }
  
}