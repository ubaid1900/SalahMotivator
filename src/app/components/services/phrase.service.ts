import { Injectable } from '@angular/core';
import { Phrase } from '../models/phrase';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhraseService {

  constructor() { }

  mockupPhrases() {
    const phrases: Phrase[] = new Array();
    phrases[0] = new Phrase();
    phrases[0].id = 1;
    phrases[0].text =
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
       ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
       dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
       deserunt mollit anim id est laborum.`
      ;
    phrases[0].caption = 'caption 2';

    phrases[1] = new Phrase();
    phrases[1].id = 2;
    phrases[1].text = 'be motivated two';
    phrases[1].caption = 'caption two';

    phrases[2] = new Phrase();
    phrases[2].id = 3;
    phrases[2].text = 'be motivated three';
    phrases[2].caption = 'caption 3';

    localStorage.setItem('phrases', JSON.stringify(phrases));
  }
  getPhrases(): Observable<Phrase[]> {
    const storedPhrases: string = localStorage.getItem('phrases');
    return of(JSON.parse(storedPhrases));
  }
  addPhrase(phrase: Phrase): void {
    let phrases: Phrase[];
    this.getPhrases().subscribe((value) => phrases = value);
    if (phrases === null) {
      phrases = new Array();
    }
    phrases.push(phrase);
    localStorage.setItem('phrases', JSON.stringify(phrases));
  }
  updatePhrase(phrase: Phrase): void {
    let phrases: Phrase[];
    this.getPhrases().subscribe((value) => phrases = value);
    if (phrases !== null) {
      const p: Phrase = phrases.find((f) => f.id === phrase.id);
      if (p !== null) {
        const idx: number = phrases.indexOf(p);
        phrases[idx] = phrase;
        localStorage.setItem('phrases', JSON.stringify(phrases));
      }
    }
  }
  deletePhrase(phrase: Phrase): void {
    let phrases: Phrase[];
    this.getPhrases().subscribe((value) => phrases = value);
    if (phrases !== null) {
      phrases = phrases.filter((p) => p.id !== phrase.id);
      console.log(phrases.length);
      localStorage.setItem('phrases', JSON.stringify(phrases));
    }
  }

  clearPhrases(): void {
    localStorage.removeItem('phrases');
  }
}
