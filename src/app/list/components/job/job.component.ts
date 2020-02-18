import {Component, Input, OnInit} from '@angular/core';
import {Job} from '../../interace/job';


@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

  @Input() job: Job;

  constructor() { }

  ngOnInit() {
    this.job.getDescription();
  }

}
