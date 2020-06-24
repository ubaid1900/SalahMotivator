import { Component, OnInit, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Title } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { PrayTimesService } from 'src/app/pray-times.service';

export interface IContext {
  data: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  envName: string;
  constructor(private titleService: Title, private prayTimesService: PrayTimesService) {
  }

  ngOnInit() {
    this.titleService.setTitle(`${this.titleService.getTitle()} - Dashboard`);
    this.envName = environment.environmentName;
    this.prayTimesService.get();
  }
}
