import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PhraseService } from '../services/phrase.service';
import { Phrase } from '../models/phrase';
import { Title } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-manage-phrases',
  templateUrl: './manage-phrases.component.html',
  styleUrls: ['./manage-phrases.component.css']
})
export class ManagePhrasesComponent implements OnInit {

  addPhraseForm: FormGroup;
  phrase: Phrase;
  phrases: Phrase[];

  constructor(private titleService: Title
    , private phraseService: PhraseService
    , private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.titleService.setTitle(`${this.titleService.getTitle()} - Manage Phrases`);
    this.getPhrases();
    this.phrase = new Phrase();
    this.addPhraseForm = this.formBuilder.group({
      id: [-1],
      caption: [this.phrase.caption, Validators.compose([Validators.required, Validators.maxLength(10)])],
      text: [this.phrase.text, Validators.compose([Validators.required])]
    });
  }
  getPhrases(): void {
    this.phraseService.getPhrases().subscribe((value) => this.phrases = value);
  }
  mockupPhrases() {
    console.log('mockupPhrases called');
    this.phraseService.mockupPhrases();
    this.getPhrases();
  }
  clearPhrases() {
    console.log('clearPhrases called');
    this.phraseService.clearPhrases();
    this.getPhrases();
  }
  addPhrase(phrase: Phrase) {
    console.log('caption is:' + phrase.caption);
    console.log('text is:' + phrase.text);
    this.phraseService.addPhrase(phrase);
  }
}
