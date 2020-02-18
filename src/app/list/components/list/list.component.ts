import { Component, OnInit } from '@angular/core';
import {Job} from '../../interace/job';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  localJobsArray: Job[] = [];
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Loading the data from resolver
    const vm = this;
    const sub = this.route.data.subscribe(data => {
      console.log("aaaaaaaaaaaaa", data);
        // data.jobList.forEach(val => {
        //   console.log(val);
        // });
      },
      () => console.log('Error resolving'),
      () => {}
    );
  }

}
