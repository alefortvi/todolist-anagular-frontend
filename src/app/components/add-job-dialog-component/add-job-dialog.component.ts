import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from '@angular/material';
import {ListService} from '../../services/list.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

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
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private formBuilder: FormBuilder,
    private listService: ListService,
    private snackBar: MatSnackBar) {}

  public localButtonLabel = 'Agregar tarea';
  public localLoading = false;
  public photoSelected: string | ArrayBuffer;
  public file: File;
  public localJobFormGroup: FormGroup;
  public messageSnackBar = 'Tarea creada con exito';

  ngOnInit(): void {

      this.localJobFormGroup = this.formBuilder.group({
        description: ['', [Validators.required, Validators.minLength(10)]],
      });


  }

  public evUploadPhoto() {
    if (this.localJobFormGroup.invalid) {
      return;
    }
    const des = this.localJobFormGroup.get('description').value;
    this.localLoading = true;
    this.localButtonLabel = 'Subiendo';
    this.listService.createNewJob(des, this.file).subscribe((v: {message: string}) => {
      if (v.message) {
        this.dialogRef.close();
        this.snackBar.open(this.messageSnackBar, 'cerrar', {
            duration: 2000,
          });


      } else {
        this.localLoading = false;
        this.localButtonLabel = 'Agregar tarea';
      }
    }, (error) => {},
      () => {
        this.localLoading = false;
        this.localButtonLabel = 'Agregar tarea';
      }
    );
  }



  onPhotoSelected(event): void {
    if (event.target.files && event.target.files[0]) {
      this.file = event.target.files[0] as File;
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
