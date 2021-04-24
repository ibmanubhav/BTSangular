import { Component, OnInit } from '@angular/core';
import { bug } from "../bug";
import { BugService } from "../bug.service";
import { observable } from 'rxjs';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-search-bugs',
  templateUrl: './search-bugs.component.html',
  styleUrls: ['./search-bugs.component.css']
})
export class SearchBugsComponent implements OnInit {
  title: String = "Search Bug";
  Bug: bug = new bug();
  bugArray: any;
  bugList: any;

  constructor(private BugService: BugService) { }
  // ==================================================

  getBugsStatusandName(){
    let name = (<HTMLInputElement>document.getElementById('name')).value;
    let status = (<HTMLInputElement>document.getElementById('status')).value;
  const promise = this.BugService.getBugsStatusandName(name, status);
      promise.subscribe(response => {
      console.log(response);
        this.bugList = response;
        if (this.bugList!=0) {
          this.bugArray = this.bugList;
          alert("Bug Found")
        }
        else {
          alert("No Bug with Name : " + name + " and Status : " + status + " found");
          this.bugArray = [];
        }
      },
        error => {
          alert('error happened..')
        })
    }

  // reloadPage() {
  //   window.location.reload();
  // }

  // ==================================================
  getBugName(name: any) {
    console.log(this.Bug.name);
    const observable = this.BugService.getBugName(this.Bug.name);
    observable.subscribe(response => {
      console.log(response);
      this.bugArray = response;
      if (this.bugArray[0] == undefined) {
        return alert('Oops!! No Bug in Database')
      }
      else {
        return alert('Bug Found')
      }
    })
  }


  getBugStatus(status: any) {
    const observable = this.BugService.getBugStatus(status);
    observable.subscribe(response => {
      console.log(response);
      this.bugArray = response
      if (this.bugArray[0] == undefined) {
        return alert('Oops!! No Bug in Database')
      }
      else {
        return alert('Bug Found')
      }
    })
  }

  deleteBug(id: any, index: number) {
    if (confirm("Are you Sure??")) {
      const observable = this.BugService.delete(id);
      observable.subscribe(response => this.bugArray.splice(index, 1))
      alert("Bug Deleted");
    }
    else {
      alert("Ok Cancelled !!!")
    }

  }


  ngOnInit(): void {
    const observable = this.BugService.getAllBugs();
    observable.subscribe(response => {
      console.log(response);
      this.bugArray = response;

    });
  }
}
