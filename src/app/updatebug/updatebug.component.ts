import { Component, OnInit } from '@angular/core';
import { bug } from "../bug";
import { BugService } from "../bug.service";


@Component({
  selector: 'app-updatebug',
  templateUrl: './updatebug.component.html',
  styleUrls: ['./updatebug.component.css']
})
export class UpdatebugComponent implements OnInit {
  title: string = 'update Bug Form';
  Bug: bug = new bug();
  bugArray: any;
  bugResult: any;
  name: String = "";

  constructor(private BugService: BugService) { }
  //=============================================================================================
  getBugName1(name: any) {
    let URL = 'http://localhost:8081/bug/';
    let bugname = (<HTMLInputElement>document.getElementById('bugname')).value;
    if (bugname) {
      URL = URL + 'name/' + bugname;
      const observable = this.BugService.getBugName12(bugname);
      observable.subscribe(response => {
        this.bugArray = response;
        console.log("success");
        if (this.bugArray) {
          this.Bug = this.bugArray;
        }
        else {
          alert("Enter a valid bug name");
        }
      },
        error => {
          console.log(error);
          alert("error");
        })
    }
    else {
      alert("Please enter bug name")
    }
  }

  //updating bug details
  update() {
    if (this.Bug.name) {
      this.Bug.name = (<HTMLInputElement>document.getElementById('bugname')).value;

      console.log(this.Bug);
      const promise = this.BugService.updateBug(this.Bug, this.Bug.id);
      promise.subscribe((response: any) => {
        console.log(response);
        alert('Bug is Updated')
      },
        error => {
          console.log(error);
          alert('Error Occured')
        })
    }
    else {
      alert("Enter a valid bug name..")
    }
  }

  ngOnInit(): void {
  }

}
//=============================================================================================

//   update() {
//     const promise = this.BugService.updateBug(this.Bug, this.Bug.id);
//     promise.subscribe((response: any) => {
//       console.log(response);
//       alert('Bug is Updated')

//     },
//       error => {
//         console.log(error);
//         alert('Error Occured')

//       })
//   }

//   ngOnInit(): void {
//   }

// }
