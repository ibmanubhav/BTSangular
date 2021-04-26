import { Component, OnInit } from '@angular/core';
import { bug } from "../bug";
import { BugService } from "../bug.service";

@Component({
  selector: 'app-create-bug-form',
  templateUrl: './create-bug-form.component.html',
  styleUrls: ['./create-bug-form.component.css']
})
export class CreateBugFormComponent implements OnInit {
  title: string = 'Create Bug Form';
  Bug: bug = new bug();
  //bugArray: bug[] = [];
  bugArray : any;

  constructor(private BugService: BugService) { }

  save() {
    // this.bugArray.push(Object.assign({}, this.Bug));
    // console.log(this.Bug.name);
    // console.log(this.Bug.projectId);
    // console.log(this.Bug.module);
    // console.log(this.Bug.buildVersion);
    // console.log(this.Bug.synopsis);
    // console.log(this.Bug.product);
    // console.log(this.Bug.description);
    // console.log(this.Bug.submittedOn);
    // console.log(this.Bug.eta);
    // console.log(this.Bug.status);
    // console.log(this.Bug.priority);
    // console.log(this.Bug.severity);
    // console.log(this.Bug.type);


    const observable = this.BugService.save(this.Bug);
    observable.subscribe(response => {
      console.log(response);
      this.Bug.id = response;
      alert("Bug is added");
      this.bugArray.push(Object.assign({}, this.Bug));
    },
      error => {
        console.log(error);
        alert("Error, check form and try again")
      })

  }
  ngOnInit(): void {



  }
  // getBugName(name:any)
  // {
  //   this.BugService.getBugName(name).subscribe(response=>{
  //     this.bugArray=[response];
  //     console.log(response);
  //     alert('Bug Displayed');
  //   },
  //   error=>{
  //     console.log(error);
  //     alert('Error Occured');
  //   })

  //}

}
