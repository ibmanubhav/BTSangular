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

  constructor(private BugService: BugService) { }
//=============================================================================================
//=============================================================================================

  update() {
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

  ngOnInit(): void {
  }

}
