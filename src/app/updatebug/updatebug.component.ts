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
  currentStatus: any;

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
        this.currentStatus = this.bugArray.status;
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
          if (this.currentStatus == 'NEW' && (this.Bug.status != 'NEW' || this.Bug.status != 'ASSIGNED')) {
            alert('Status can be changed only to ASSIGNED');
            return;
          }
          else if (this.currentStatus == 'ASSIGNED' && (this.Bug.status != 'ASSIGNED' || this.Bug.status != 'OPEN')) {
            alert('Status can be changed only to OPEN');
            return;
          }
          else if (this.currentStatus == 'OPEN' && (this.Bug.status != 'OPEN' || this.Bug.status != 'DEFERRED' || this.Bug.status != 'DUPLICATE' || this.Bug.status != 'REJECTED' || this.Bug.status != 'NOT_A_BUG' || this.Bug.status != 'COULD_NOT_REPRODUCE' || this.Bug.status != 'NEED_MORE_INFO' || this.Bug.status != 'WONT_FIX' || this.Bug.status != 'FIXED')) {
            alert('Status can be changed only to DEFERRED, DUPLICATE, REJECTED, NOT_A_BUG, COULD_NOT_REPRODUCE, NEED_MORE_INFO, WONT_FIX, FIXED');
            return;
          }
          else if (this.currentStatus == 'FIXED' && (this.Bug.status != 'FIXED' || this.Bug.status != 'PENDING_RETEST')) {
            alert('Status can be changed only to PENDING_RETEST');
            return;
          }
          else if (this.currentStatus == 'PENDING_RETEST' && (this.Bug.status != 'PENDING_RETEST' || this.Bug.status != 'RETEST')) {
            alert('Status can be changed only to RETEST');
            return;
          }
          else if (this.currentStatus == 'RETEST' && (this.Bug.status != 'RETEST' || this.Bug.status != 'REOPEN' || this.Bug.status != 'VERIFIED')) {
            alert('Status can be changed only to REOPEN or VERIFIED');
            return;
          }
          else if (this.currentStatus == 'REOPEN' && (this.Bug.status != 'REOPEN' || this.Bug.status != 'DEFERRED' || this.Bug.status != 'DUPLICATE' || this.Bug.status != 'REJECTED' || this.Bug.status != 'NOT_A_BUG' || this.Bug.status != 'COULD_NOT_REPRODUCE' || this.Bug.status != 'NEED_MORE_INFO' || this.Bug.status != 'WONT_FIX' || this.Bug.status != 'FIXED')) {
            alert('Status can be changed only to DEFERRED, DUPLICATE, REJECTED, NOT_A_BUG, COULD_NOT_REPRODUCE, NEED_MORE_INFO, WONT_FIX or FIXED');
            return;
          }
          else if (this.currentStatus == 'VERIFIED' && (this.Bug.status != 'VERIFIED' || this.Bug.status != 'CLOSED')) {
            alert('Status can be changed only to VERIFIED or CLOSED');
            return;
          }
          else if (this.currentStatus == 'WONT_FIX' && (this.Bug.status != 'WONT_FIX' || this.Bug.status != 'CLOSED')) {
            alert('Status can be changed only to WONT_FIX or CLOSED');
            return;
          }
          else if (this.currentStatus == 'DUPLICATE' && (this.Bug.status != 'DUPLICATE' || this.Bug.status != 'CLOSED')) {
            alert('Status can be changed only to DUPLICATE  or CLOSED');
            return;
          }
          else if (this.currentStatus == 'REJECTED' && (this.Bug.status != 'REJECTED' || this.Bug.status != 'CLOSED')) {
            alert('Status can be changed only to REJECTED or CLOSED');
            return;
          }
          else if (this.currentStatus == 'NOT_A_BUG' && (this.Bug.status != 'NOT_A_BUG' || this.Bug.status != 'CLOSED')) {
            alert('Status can be changed only to NOT_A_BUG orCLOSED');
            return;
          }
          else if (this.currentStatus == 'COULD_NOT_REPRODUCE' && (this.Bug.status != 'COULD_NOT_REPRODUCE' || this.Bug.status != 'DEFERRED')) {
            alert('Status can be changed only to DEFERRED');
            return;
          }
          else if (this.currentStatus == 'NEED_MORE_INFO' && (this.Bug.status != 'NEED_MORE_INFO' || this.Bug.status != 'DEFERRED')) {
            alert('Status can be changed only to NEED_MORE_INFO or DEFERRED');
            return;
          }
          else if (this.currentStatus == 'DEFERRED' && (this.Bug.status != 'DEFERRED' || this.Bug.status != 'ASSIGNED')) {
            alert('Status can be changed only to DEFERRED or ASSIGNED');
            return;
          }
          else if (this.currentStatus == 'CLOSED' && this.Bug.status != 'CLOSED') {
            alert('Status can be changed only to CLOSED');
            return;
          }

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
