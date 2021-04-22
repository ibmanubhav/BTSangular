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

  constructor(private BugService: BugService) { }
  // ==================================================

  // bugs1(name:String, status:any){
  //   if (name != null){
  //     this.getBugName(name);
  //   }
  //   else if (status != null){
  //     this.getBugStatus(status);
  //   }
  //   else{
  //     this.BugService.getAllBugs();
  //   }
  // }

  // reloadPage() {
  //   window.location.reload();
  // }

  // ==================================================
  getBugName(name: any) {
    console.log(this.Bug.name);
    const observable = this.BugService.getBugName(this.Bug.name);
    observable.subscribe(response => {
      console.log(response);
      this.bugArray = [response];
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
