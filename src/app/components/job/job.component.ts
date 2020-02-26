import {Component, Input, OnInit} from '@angular/core';
import {Job} from '../../interfaces/Job';
import {environment} from '../../../environments/environment';
import {ListService} from '../../services/list.service';
import {State} from '../../interfaces/State';


@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

  @Input() job: Job;
  @Input() states: State[];
  currentState: string;
  currentCode: number;
  color: string;
  localRootPath = environment.rootPath;

  constructor(private listService: ListService) {
  }

  ngOnInit() {
    // first resolver
    if (this.states[this.job.state]) {
      this.currentState = this.states[this.job.state].state;
      this.currentCode = this.states[this.job.state].cod;
      this.pvSetCardColor();
    }
  }
  public pbSetStatus(event) {
    const vm = this;
    const current = this.states.find( v => {return v.state === event.value; });
    this.currentCode = current.cod;
    this.currentState = current.state;
    this.listService.updateState(this.job._id, this.currentCode - 1)
      .subscribe(v => {
        console.log(v);
        vm.pvSetCardColor();
      });
  }

  private pvSetCardColor() {
    switch (this.currentCode) {
      case 1: {
        this.color = 'rgba(200,3,0,0.2)';
        break;
      }
      case 2: {
        this.color = 'rgba(64,200,36,0.2)';
        break;
      }
      case 3: {
        this.color = 'rgba(255,255,2,0.4)';
        break;
      }
    }
  }
}
