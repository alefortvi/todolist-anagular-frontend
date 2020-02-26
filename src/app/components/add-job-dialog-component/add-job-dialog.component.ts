import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ListService} from '../../services/list.service';
import {Router} from '@angular/router';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-add-job-dialog-component',
  templateUrl: './add-job-dialog-component.html',
  styleUrls: ['./add-job-dialog-component.css']
})
export class AddJobDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddJobDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

    photoSelected: string | ArrayBuffer;
    file: File;
    jobDescription: string;

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

  onPhotoSelected(event): void {
    if (event.target.files && event.target.files[0]) {
      this.file = <File> event.target.files[0];
      // image preview
      const reader = new FileReader();
      reader.onload = e => this.photoSelected = reader.result;
      reader.readAsDataURL(this.file);
    }
  }

  // uploadPhoto(title: HTMLInputElement, description: HTMLTextAreaElement) {
  //   this.photoService
  //     .createPhoto(title.value, description.value, this.file)
  //     .subscribe(
  //       res => {
  //         console.log(res);
  //         this.router.navigate(['/photos'])
  //       },
  //       err => console.log(err)
  //     );
  //   return false;
  // }
}
