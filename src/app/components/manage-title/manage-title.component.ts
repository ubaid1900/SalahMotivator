import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-manage-title',
  templateUrl: './manage-title.component.html',
  styleUrls: ['./manage-title.component.css']
})
export class ManageTitleComponent implements OnInit {
  title: string;
  constructor(private taskService: TaskService, private activeModal: NgbActiveModal) { }

  ngOnInit() {
    const storedTitle: string = this.taskService.getTitle();
    this.title = storedTitle ? storedTitle : '';
  }
  updateTitle() {
    console.log(this.title);
    this.taskService.updateTitle(this.title);
  }
  dismiss() { this.activeModal.dismiss('Cross click'); }
  close(message: string) { this.activeModal.close(message); }

}
