import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  public currentCount = 0;

  public incrementCounter() {
    this.currentCount++;
    localStorage.setItem("counter", JSON.stringify(this.currentCount));
  }

  public resetCounter() {
    this.currentCount = 0;
    localStorage.removeItem("counter");
  }

  public ngOnInit(){
    this.currentCount = JSON.parse(localStorage.getItem("counter") ?? "0");
  }

  public ngOnDestroy() {
    console.log("leaving!");
  }

}
