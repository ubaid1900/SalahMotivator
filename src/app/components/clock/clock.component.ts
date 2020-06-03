import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { interval, Observable, Subscription } from '../../../node_modules/rxjs';

@Component({
  selector: 'app-clock',
  template: `<div><span>{{prefix}}</span>{{currentTimeString}}</div>`,
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit, OnDestroy {
  @Input() prefix: string;
  intervalSubscription: Subscription;
  currentTimeString: string;
  constructor() { }
  ngOnInit() {
    // interval(1000).subscribe(() => this.currentTimeString = new Date().toLocaleTimeString());
    this.intervalSubscription = interval(1000).subscribe(
      () => this.currentTimeString = new Date().toLocaleTimeString()
    );
  }
  ngOnDestroy(): void {
    this.intervalSubscription.unsubscribe();
  }
}
