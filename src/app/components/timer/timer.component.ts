import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Util } from '../util';
import { interval, Subscription } from '../../../node_modules/rxjs';



@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  @Input() until: string;
  @Input() cssClass: string;
  @Input() offSetInMinutes = 5;
  @Input() prefix: string;
  @Output() countdownStatus: EventEmitter<boolean> = new EventEmitter();
  countdown: string;
  constructor() { }
  fun(source: Subscription): any {
    const untilTime = new Date(new Date().toLocaleDateString() + ' ' + this.until);
    const diff = new Util().get_time_difference(new Date(), untilTime);
    if (isNaN(<number><any>untilTime - <number><any>new Date()) || diff === null) {
      this.cssClass = 'danger';
      source.unsubscribe();
      this.countdown = '';
      this.countdownStatus.emit(false);
      return;
    } else {
      this.countdown = `${this.prefix === undefined ? '' : this.prefix}${diff.minutes}:${diff.seconds}`;
      this.countdownStatus.emit(true);
    }
  }
  ngOnInit() {
    const untilTime: Date = new Date(new Date().toLocaleDateString() + ' ' + this.until);
    // let di ff = new Util().get_time_difference(new Date(), untilTime);
    const delay = <number><any>untilTime - <number><any>new Date();
    // console.log(delay);

    setTimeout(() => {
      const source =
        interval(1000)
          .subscribe(
            () => this.fun(source)
          );
    }, delay - (this.offSetInMinutes * 60 * 1000));
  }
}
