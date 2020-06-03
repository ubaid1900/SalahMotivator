import { Component, OnInit } from '@angular/core';
import { PhraseService } from '../services/phrase.service';
import { Phrase } from '../models/phrase';

@Component({
  selector: 'app-phrase',
  templateUrl: './phrase.component.html',
  styleUrls: ['./phrase.component.css']
})
export class PhraseComponent implements OnInit {
  phrases: Phrase[];

  constructor(private phraseService: PhraseService) { }

  ngOnInit() {
    this.phraseService.getPhrases().subscribe(
      (value) => this.phrases = value,
      (error) => console.log(error)
    );
  }

}
