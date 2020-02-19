import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'

import { ListService } from '../../services/list.service'
import { Job } from '../../interfaces/Job'
import {State} from "../../interfaces/State";

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.css']
})
export class PhotosListComponent implements OnInit {

  jobs: Job[] = [];
  states: State[] = [];

  constructor(
    private listService: ListService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const vm = this;
    this.listService.getJobs()
      .subscribe(
        res => {
          this.jobs = res;
        },
        err => console.log(err)
      );
    const sub = this.route.data.subscribe(data => {
      vm.states =  data.stateList;
    });


  }

  selectedCard(id: string) {
    this.router.navigate(['/photos', id]);
  }

}
