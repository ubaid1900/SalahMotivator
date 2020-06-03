import { Component, OnInit, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Title } from '@angular/platform-browser';

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
  constructor(private titleService: Title) {
  } 

  ngOnInit() {
    this.titleService.setTitle(`${this.titleService.getTitle()} - Dashboard`);
    this.envName = environment.environmentName;
  }
}
