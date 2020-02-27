import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
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

  @Output() emiterJobCreated: EventEmitter<boolean> = new EventEmitter();

  constructor(
    public dialogRef: MatDialogRef<AddJobDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private formBuilder: FormBuilder,
    private listService: ListService,
    private snackBar: MatSnackBar) {}

  public localButtonLabel = 'Agregar tarea';
  public localErrorMessage = '';
  public localLoading = false;
  public photoSelected: string | ArrayBuffer;
  public file: File;
  public localJobFormGroup: FormGroup;
  public messageSnackBar = 'Tarea creada con exito';
  public localErrorFlag = false;

  ngOnInit(): void {
      this.localJobFormGroup = this.formBuilder.group({
        description: ['', [Validators.required,
          Validators.minLength(10),
          Validators.maxLength(50)]],
      });
  }

  public evUploadPhoto() {
    const vm = this;
    if (this.localJobFormGroup.invalid) {
      return;
    }
    if (!this.file) {
       this.localErrorFlag = true;
       this.localErrorMessage = 'Debe seleccionar una imagen';
       return;
     }
    const des = this.localJobFormGroup.get('description').value;
    this.localLoading = true;
    this.localButtonLabel = 'Subiendo';
    const sub = this.listService.createNewJob(des, this.file).subscribe((v: {message: string}) => {
      if (v.message) {
        this.dialogRef.close();
        this.localErrorFlag = false;
        this.localErrorMessage = 'Debe seleccionar una imagen';
        this.snackBar.open(this.messageSnackBar, 'cerrar', {
            duration: 2000,
          });
        vm.emiterJobCreated.emit(true);
      } else {
        this.localLoading = false;
        this.localButtonLabel = 'Agregar tarea';
        this.localErrorFlag = true;
        this.localErrorMessage = 'Error al crear la tarea';
      }
    }, (error) => {
        this.localErrorFlag = true;
        this.localErrorMessage = 'No se pudo conectar al servidor';
      },
      () => {
        this.localLoading = false;
        this.localButtonLabel = 'Agregar tarea';
        sub.unsubscribe();
      }
    );
  }



  onPhotoSelected(event): void {
    if (event.target.files && event.target.files[0]) {
      this.file = event.target.files[0] as File;
      // const reader = new FileReader();
      // reader.onload = e => this.photoSelected = reader.result;
      // reader.readAsDataURL(this.file);
    }
  }
}
