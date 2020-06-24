import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PrayTimesService {

  constructor(private httpClient: HttpClient) { }
  get() {
    const prayTimes$ = this.httpClient.get('http://localhost:3000/praytimes');
    prayTimes$.subscribe((data) => console.log(data), (err) => console.error(err));
  }
}
