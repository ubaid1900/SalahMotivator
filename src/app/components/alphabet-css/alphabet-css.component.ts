import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-alphabet-css',
  templateUrl: './alphabet-css.component.html',
  styleUrls: ['./alphabet-css.component.css']
})
export class AlphabetCssComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Alphabets');
  }

}
