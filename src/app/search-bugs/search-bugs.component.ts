import { Component, OnInit } from '@angular/core';
import { bug } from "../bug";
import { BugService } from "../bug.service";
import { observable } from 'rxjs';

@Component({
  selector: 'app-search-bugs',
  templateUrl: './search-bugs.component.html',
  styleUrls: ['./search-bugs.component.css']
})
export class SearchBugsComponent implements OnInit {
  title: String = "Search Bug";
  Bug: bug = new bug();
  bugArray: any;

  constructor(private BugService: BugService) { }

  getBugName(name: any) {
    console.log(this.Bug.name);
    const observable = this.BugService.getBugName(this.Bug.name);
    observable.subscribe(response => {
      console.log(response);
      this.bugArray = [response];
      console.log("Success");
    },
      error => {
        console.log(error);
        alert('Error Occured');
      })

  }

  getBugStatus(status: any) {
    console.log(this.Bug.status);
    const observable = this.BugService.getBugStatus(this.Bug.status);
    observable.subscribe(response => {
      console.log(response);
      this.bugArray = [response];
      console.log("Success");
    },
      error => {
        console.log(error);
        alert('Error Occured');
      })

  }


  ngOnInit(): void {
  }

}