import {environment} from '../../../environments/environment';
import {ListService} from '../../services/list.service';
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {State} from '../../interfaces/State';
import {Job} from '../../interfaces/Job';


@Component({
  selector: 'app-card-job',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.css']
})
export class JobCardComponent implements OnInit {

  @Input() job: Job;
  @Input() states: State[];
  @Output() emiterJobDelete: EventEmitter <string> = new EventEmitter();
  localCurrentState: string;
  localCurrentCode: number;
  localColor: string;
  localRootPath = environment.rootPath;

  constructor(private listService: ListService) {
  }

  ngOnInit() {
    // first resolver
    if (this.states[this.job.state]) {
      this.localCurrentState = this.states[this.job.state].state;
      this.localCurrentCode = this.states[this.job.state].cod;
      this.pvSetCardColor();
    }
  }

  public pbSetStatus(event) {
    const vm = this;
    const current = this.states.find(v => {
      return v.state === event.value;
    });
    this.localCurrentCode = current.cod;
    this.localCurrentState = current.state;
    this.listService.updateState(this.job._id, this.localCurrentCode - 1)
      .subscribe(v => {
        vm.pvSetCardColor();
      });
  }

  public pbDeleteCard() {
    this.emiterJobDelete.emit(this.job._id);
  }

  private pvSetCardColor() {
    switch (this.localCurrentCode) {
      case 1: {
        this.localColor = 'rgba(200,3,0,0.7)';
        break;
      }
      case 2: {
        this.localColor = 'rgba(64,200,36,0.7)';
        break;
      }
      case 3: {
        this.localColor = 'rgba(255,177,1,0.8)';
        break;
      }
    }
  }
}
