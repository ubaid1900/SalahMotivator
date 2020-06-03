import { Component, OnInit, OnChanges } from '@angular/core';
import { TaskService } from '../services/task.service';
import { ITask, Task } from '../models/task';
import { NgbModal } from '../../../node_modules/@ng-bootstrap/ng-bootstrap';
import { AddTaskComponent } from '../add-task/add-task.component';
import { Phrase } from '../models/phrase';
import { Util } from '../util';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { resolve } from 'q';

declare var prayTimes: any;

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit, OnChanges {
  allTasks: ITask[] = [];
  filteredTasks: ITask[] = [];

  private _filterString = '';
  public get filterString(): string {
    return this._filterString;
  }
  public set filterString(v: string) {
    this._filterString = v;
    this.performFilter();
  }

  constructor(private tasksService: TaskService, private modalService: NgbModal) { }

  ngOnInit() {
    this.fetchTasks();
  }

  ngOnChanges() {
    this.performFilter();
  }
  private fetchTasks(): void {
    this.tasksService.getTasks().subscribe(
      (result) => { this.allTasks = result; this.filteredTasks = result; },
      (error) => { console.log(error); }
    );
  }
  performFilter(): void {
    const filteredBy: string = this.filterString.toLocaleLowerCase();
    console.log(filteredBy.concat('a'));
    this.filteredTasks = this.allTasks.filter((t: ITask) => t.name.toLocaleLowerCase().indexOf(filteredBy) !== -1);
  }

  openAddTaskModal() {
    const modalref = this.modalService.open(AddTaskComponent, { centered: true, size: 'lg' });
    modalref.result.then(
      (result) => {
        if (result === 'Saved') {
          this.fetchTasks();
        }
      },
      (reason) => { }
    );
    console.log(modalref.result);
  }
  refresh() {
    this.fetchTasks();
  }
  getLocation() {
    // Simple wrapper
    return new Promise((res, rej) => {
      navigator.geolocation.getCurrentPosition(res, rej);
    });
  }

  calculatePrayerTimes() {
    // navigator.geolocation.getCurrentPosition(this.showPosition);
    this.getLocation().then(
      (res) => this.setPrayerTasksForLocation(res),
      (rej) => {
        console.log(rej);
      }
    );
    // this.performFilter();
  }
  setPrayerTasksForLocation(position: any) {
    prayTimes.setMethod('ISNA');

    const timeZone = '-5';
    const dst = 'auto';
    const format = '12h';
    const configuredPrayers = ['fajr', 'dhuhr', 'asr', 'maghrib', 'isha'];

    const prayerTimes = prayTimes.getTimes(new Date(), [position.coords.latitude, position.coords.longitude], timeZone, dst, format);

    console.log(prayerTimes);

    const prayerTasks: ITask[] = [];
    for (const key in prayerTimes) {
      if (prayerTimes.hasOwnProperty(key)) {
        if (configuredPrayers.indexOf(key) > -1) {
          const prayerName = key;
          const startTime = prayerTimes[key];
          const task: ITask = new Task();
          task.deletable = false;
          task.done = false;
          task.name = prayerName;
          task.startTime = startTime;
          task.preferredTime = startTime; /* TODO */
          switch (key) {
            case 'fajr':
              task.endTime = prayerTimes.sunrise;
              break;
            case 'dhuhr':
              task.endTime = prayerTimes.asr;
              break;
            case 'asr':
              task.endTime = prayerTimes.maghrib;
              break;
            case 'maghrib':
              task.endTime = prayerTimes.isha;
              break;
            case 'isha':
              task.endTime = prayerTimes.midnight;
              break;

            default:
              break;
          }

          prayerTasks.push(task);
        }
      }
    }
    this.allTasks = prayerTasks;
    this.filteredTasks = prayerTasks;
  }
  clearTasks() {
    localStorage.removeItem('tasks');
  }
  mockupTasks() {
    const tasks: ITask[] = [];
    for (let idx = 0; idx < 5; idx++) {
      const t: ITask = new Task();
      t.id = idx;
      t.name = `task ${idx}`;
      if (idx === 3) {
        t.name = 'abc';
      }
      t.startTime = '12:30';
      t.preferredTime = '12:55';
      t.endTime = '12:59';
      t.deletable = true;
      t.motivatingPhrases = [];
      let p: Phrase = new Phrase(); p.caption = 'go do ' + t.name; p.id = 0;
      t.motivatingPhrases.push(p);
      p = new Phrase(); p.caption = `don't miss it`; p.id = 1;
      t.motivatingPhrases.push(p);
      // console.log(t.deletable);
      tasks.push(t);
    }
    const intervalBetweenTimesInMinutes = 6;
    const tt = new Date();
    // tt.setMinutes(-11);
    for (let i = 0; i < tasks.length; i++) {
      tasks[i].startTime = tt.toDateString();
      //            tt.setMinutes(tt.getMinutes() + intervalBetweenTimesInMinutes + 1);
      tasks[i].startTime = new Util().formatTime(tt);
      tt.setMinutes(tt.getMinutes() + intervalBetweenTimesInMinutes);
      tasks[i].preferredTime = new Util().formatTime(tt);
      tt.setMinutes(tt.getMinutes() + intervalBetweenTimesInMinutes);
      tasks[i].endTime = new Util().formatTime(tt);
      tasks[i].done = (i % 2 === 0);
    }
    //  console.log(JSON.stringify(tasks));
    localStorage.setItem('tasks', JSON.stringify(tasks));
    //  console.log(localStorage.getItem('tasks'));
  }
}
