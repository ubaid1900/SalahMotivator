import { Injectable } from '@angular/core';
import { Phrase } from '../models/phrase';
import { Task } from '../models/task';
import { of, Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  deleteTask(taskId: number): any {
    let tasks = this.getTasksFromStorage();
    tasks = tasks.filter(m => m.id !== taskId);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  addTask(task: Task): any {
    const tasks = this.getTasksFromStorage();
    let nextId = Math.max(...tasks.map(t => t.id), 1);
    task.id = ++nextId;
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  getTasksFromStorage(): Task[] {
    // console.log(localStorage.getItem('tasks'));
    const tasks: Task[] = JSON.parse(localStorage.getItem('tasks'));
    return tasks;
  }
  constructor() { }
  getTasks(): Observable<Task[]> {

    const tasks: Task[] = this.getTasksFromStorage();
    return of(tasks);
  }

  private addTime(d: Date, m: number): Date {
    const nd = new Date(d.getTime() + 1000 * 60 * m);
    return nd;
  }
  private getTimeFormatted(d: Date): string {
    return d.getHours().toString() + ':' + d.getMinutes().toString().padStart(2, '0');
  }

  getTitle() {
    const title: string = localStorage.getItem('title');
    return title;
  }
  updateTitle(title: string): void {
    localStorage.setItem('title', title);
  }

}
