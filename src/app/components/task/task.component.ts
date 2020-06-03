import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../models/task';
import { ConfirmationDialogService } from '../services/confirmation-dialog.service';
import { TaskService } from '../services/task.service';
import { Router, NavigationExtras } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task: Task;
  @Output() deleted: EventEmitter<boolean> = new EventEmitter();
  showCarousel: boolean;
  constructor(private taskService: TaskService, private confirmationDialogService: ConfirmationDialogService,
    private router: Router) { }

  ngOnInit() {
  }

  handleCountdownStatus(value: boolean) {
    // console.log(value);
    this.showCarousel = value;
  }
  mark(e: any, task: Task) {
    console.log(e);
    console.log(task);
  }
  public openConfirmationDialog() {
    const message = `Do you really want to delete the phrase ${this.task.name}?`;
    this.confirmationDialogService.confirm('Please confirm..', message, 'Yes', 'probably not', 'sm')
      .then((confirmed) => {
        console.log('User confirmed:', confirmed);
        this.taskService.deleteTask(this.task.id);
        const navigationExtras: NavigationExtras = {
          queryParams: { 'param': 'refresh' }
        };
        this.deleted.emit(true);
      })
      .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }

}
