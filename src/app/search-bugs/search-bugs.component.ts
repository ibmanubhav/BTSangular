import { Component, OnInit } from '@angular/core';
import { bug } from "../bug";
import { BugService } from "../bug.service";

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
    if (this.Bug.name != undefined && this.Bug.status != undefined) {
      const observable = this.BugService.getBugsStatusandName(name, status);
      observable.subscribe(response => {
        console.log(response);
        this.bugList = response;
        if (this.bugList != 0) {
          this.bugArray = this.bugList;
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


    if (this.Bug.name != undefined && this.Bug.status == undefined) {
      const observable = this.BugService.getBugName(this.Bug.name);
      observable.subscribe(response => {
        console.log(response);
        this.bugArray = response;
        if (this.bugArray[0] == undefined) {
          alert("No bug found")

        } else {
          alert("Displaying bugs with similar name " + name)
        }
      },
        error => {
          alert("Error Occured. Not able to search..");
        })
    }


    if (this.Bug.name == undefined && this.Bug.status != undefined) {
      const observable = this.BugService.getBugStatus(status);
      observable.subscribe(response => {
        console.log(response);
        this.bugArray = response;
        if (this.bugArray[0] == undefined) {
          alert("No bug found")

        } else {
          alert("Displaying bugs with status " + status)
        }
      },
        error => {
          alert("Error Occured. Not able to search..");
        })
    }


    if (this.Bug.name == undefined && this.Bug.status == undefined) {
      alert("Please enter BUG NAME or STATUS")
    }
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



  showDescription(description: string) {
    // Swal.fire(description);
     alert(description);
  }

  ngOnInit(): void {
    const observable = this.BugService.getAllBugs();
    observable.subscribe(response => {
      console.log(response);
      this.bugArray = response;

    });
  }
}
