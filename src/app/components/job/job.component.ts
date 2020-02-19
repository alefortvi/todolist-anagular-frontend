import {Component, Input, OnInit} from '@angular/core';
import {Job} from '../../interfaces/Job';
import {environment} from '../../../environments/environment';
import {ListService} from "../../services/list.service";
import {State} from "../../interfaces/State";


@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

  @Input() job: Job;
  @Input() states: State[];
  currentState : string;

  localRootPath = environment.rootPath;
  constructor(private listService : ListService) { }

  ngOnInit() {
    // first resolver

    console.log("asdasd", this.states);
    this.currentState = this.states[this.job.state].state;

  }

}
