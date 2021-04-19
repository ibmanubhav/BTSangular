import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { bug } from './bug'

const URL = 'http://localhost:8081/bug';

@Injectable({
  providedIn: 'root'
})
export class BugService {

  constructor(private http: HttpClient) { }
  save(Bug: bug) {
    return this.http.post(URL, Bug, {
      headers: {
        "content-type": 'application/json'
      },
      responseType:"text"
    });
  }

  getAllBugs(){
    return this.http.get(URL);
  }
}
