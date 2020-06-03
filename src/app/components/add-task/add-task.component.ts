import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '../../../node_modules/@ng-bootstrap/ng-bootstrap';
import { TaskService } from '../services/task.service';
import { Task } from '../models/task';
import { Form, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '../../../node_modules/@angular/router';
import { Util } from '../util';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  addTaskFormGroup: FormGroup;
  task: Task = new Task();
  nameControl: FormControl;
  startTimeControl: FormControl;
  endTimeControl: FormControl;
  constructor(private taskService: TaskService
    , private activeModal: NgbActiveModal
    , private router: Router
  ) { }

  ngOnInit() {

    // TODO: test code
    this.task.startTime = '14:40';
    this.task.endTime = '14:50';

    this.nameControl = new FormControl(this.task.name, Validators.required);
    this.startTimeControl = new FormControl(this.task.startTime, Validators.required);
    this.endTimeControl = new FormControl(this.task.endTime, Validators.required);
    this.addTaskFormGroup = new FormGroup({
      nameControl: this.nameControl, startTimeControl: this.startTimeControl, endTimeControl: this.endTimeControl
    });
  }
  addTask(): void {
    this.buildTask();
    console.log(this.task);
    this.taskService.addTask(this.task);
    this.router.navigate(['dashboard']);
  }
  private buildTask(): void {
    this.task.name = this.addTaskFormGroup.value.nameControl;

    const startTime = new Date(new Date().toDateString() + ' ' + this.addTaskFormGroup.value.startTimeControl);
    this.task.startTime = new Util().formatTime(startTime);

    startTime.setMinutes(startTime.getMinutes() + 1);
    this.task.preferredTime = new Util().formatTime(startTime);

    const endTime = new Date(new Date().toDateString() + ' ' + this.addTaskFormGroup.value.endTimeControl);
    this.task.endTime = new Util().formatTime(endTime);

    this.task.deletable = true;

    this.task.motivatingPhrases = [];
  }

  dismiss() { this.activeModal.dismiss('Cross click'); }
  close(message: string) { this.activeModal.close(message); }

}
