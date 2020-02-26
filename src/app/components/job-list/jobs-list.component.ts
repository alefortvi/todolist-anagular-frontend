import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { ListService } from '../../services/list.service';
import { Job } from '../../interfaces/Job';
import {State} from '../../interfaces/State';
import {AddJobDialogComponent} from '../add-job-dialog-component/add-job-dialog.component';
import {MatDialog, MatDialogConfig} from '@angular/material';

@Component({
  selector: 'app-photos-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.css']
})
export class JobsListComponent implements OnInit {

  jobs: Job[] = [];
  states: State[] = [];

  constructor(
    private listService: ListService,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog
  ) {
  }

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
      vm.states = data.stateList;
    });


  }

  selectedCard(id: string) {
    this.router.navigate(['/photos', id]);
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(AddJobDialogComponent, {
      disableClose: true,
      autoFocus: true,
      data: {name: 'nombre', animal: 'animal'}
    });
  }
}
