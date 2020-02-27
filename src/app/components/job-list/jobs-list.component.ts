import {JobDialogComponent} from '../job-dialog/job-dialog.component';
import {ListService} from '../../services/list.service';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {State} from '../../interfaces/State';
import {MatDialog} from '@angular/material';
import {Job} from '../../interfaces/Job';

@Component({
  selector: 'app-photos-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.css']
})
export class JobsListComponent implements OnInit {

  localJobs: Job[] = [];
  localStates: State[] = [];

  constructor(
    private listService: ListService,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    const vm = this;
    // Get the jobs list
    this.listService.getJobs()
      .subscribe(
        res => {
          this.localJobs = res;
        },
        err => console.log(err)
      );
    // Get the serialized states
    const sub = this.route.data.subscribe(data => {
        vm.localStates = data.stateList;
      },
      (error) => {
      },
      () => {
        sub.unsubscribe();
      });
  }

  public pbOpenDialog(): void {
    const dialogRef = this.dialog.open(JobDialogComponent, {
      disableClose: false,
      autoFocus: true,
      data: {}
    });
    const sub = dialogRef.componentInstance.emiterJobCreated.subscribe(() => {
      const subs = this.listService.getJobs().subscribe(res => {
          this.localJobs = res;
        },
        () => {
        },
        () => subs.unsubscribe()
      );
    });
    dialogRef.afterClosed().subscribe(v => {
      sub.unsubscribe();
    });
  }

  public pbOrderBy(by: number) {
    let byparam;
    switch (by) {
      case 0 :
        byparam = 'id';
        break;
      case 1 :
        byparam = 'state';
        break;
      case 2 :
        byparam = 'description';
        break;
    }
    const subs = this.listService.orderBy(byparam).subscribe(res => {
        this.localJobs = res;
      },
      () => {
      },
      () => subs.unsubscribe()
    );
  }

  public pbDeleteCard(id: string) {
    const sub = this.listService.deleteJob(id)
      .subscribe((res) => {
          if (res) {
            this.localJobs = res;
          }
        }, (error) => {
        },
        () => {
          sub.unsubscribe();
        }
      );
  }

}
