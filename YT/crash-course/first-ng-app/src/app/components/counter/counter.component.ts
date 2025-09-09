import { Component, signal, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  counter = signal(0);
  resetDisabled = true;

  constructor() {}

  updateCounter(action: any) {
    switch(action) {
      case "add": 
        this.counter.update(prev => prev + 1);
        break;
      case "sub":
        this.counter.update(prev => prev - 1);
        break;
      case "reset":
        this.counter.set(0);
        break;
      default:
        console.log("Invalid action taken");
    }

    this.resetDisabled = (this.counter() == 0 ) ? true : false;
  }
}
