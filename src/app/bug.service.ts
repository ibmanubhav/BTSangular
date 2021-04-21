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
      responseType: "text"
    });
  }

  getAllBugs() {
    return this.http.get(URL);
  }

  getBugName(name: any) {
    return this.http.get(URL + '/name/' + name, {
      headers: {
        "content-type": 'application/json',
        responseType: 'text'
      }
    });
  }
  getBugStatus(status: any) {
    return this.http.get(URL + '/status/' + status, {
      headers: {
        "content-type": 'application/json',
        responseType: 'text'
      }
    });
  }
  updateBug(Bug : bug, id :string){
    return this.http.put(URL+id, bug,{
      headers:{"content-type": 'application/json'}
    })
  }
}
