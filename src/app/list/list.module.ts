import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';
import { JobComponent } from './components/job/job.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {Resolver} from './resolver';
import {ListService} from './list.service';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [ListComponent, JobComponent],
  exports: [
    ListComponent,
    MatGridListModule
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    HttpClientModule
  ],
  providers: [
    Resolver,
    ListService,
  ]
})
export class ListModule { }
