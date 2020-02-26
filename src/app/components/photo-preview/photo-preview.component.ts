import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

import { ListService } from '../../services/list.service'
import {Job} from '../../interfaces/Job'

@Component({
  selector: 'app-photo-preview',
  templateUrl: './photo-preview.component.html',
  styleUrls: ['./photo-preview.component.css']
})
export class PhotoPreviewComponent implements OnInit {

  id: string;
  photo: Job;

  constructor(
    private activatedRoute: ActivatedRoute,
    private photoService: ListService,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.photoService.getPhoto(this.id)
        .subscribe(
          res => {
            this.photo = res;
          },
          err => console.log(err)
        )
    });
  }

  deletePhoto(id: string) {
    this.photoService.deletePhoto(id)
      .subscribe(res => {
        console.log(res)
        this.router.navigate(['/photos']);
      })
  }

  // updatePhoto(title: HTMLInputElement, description: HTMLInputElement): boolean {
  //   this.photoService.getStates(this.photo._id, title.value)
  //     .subscribe(res => {
  //       console.log(res);
  //       this.router.navigate(['/photos']);
  //     });
  //   return false;
  // }

}
