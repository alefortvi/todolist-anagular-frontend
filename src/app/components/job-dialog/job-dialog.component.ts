import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialogRef, MatSnackBar} from '@angular/material';
import {ListService} from '../../services/list.service';

@Component({
  selector: 'app-job-dialog-component',
  templateUrl: './job-dialog-component.html',
  styleUrls: ['./job-dialog-component.css']
})
export class JobDialogComponent implements OnInit {

  @Output() emiterJobCreated: EventEmitter <boolean> = new EventEmitter();
  public localJobFormGroup: FormGroup;
  public localFile: File;
  public localLoading = false;
  public localErrorFlag = false;
  public localErrorMessage = '';
  public localButtonLabel = 'Agregar tarea';
  public localMessageSnackBar = 'Tarea creada con exito';

  constructor(
    public dialogRef: MatDialogRef <JobDialogComponent>,
    // @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private formBuilder: FormBuilder,
    private listService: ListService,
    private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    // Form validators
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
    if (!this.localFile) {
      this.localErrorFlag = true;
      this.localErrorMessage = 'Debe seleccionar una imagen';
      return;
    }
    const description = this.localJobFormGroup.get('description').value;
    this.localLoading = true;
    this.localButtonLabel = 'Subiendo';
    const sub = this.listService.createNewJob(description, this.localFile)
      .subscribe((v: { message: string }) => {
        if (v.message) {
          this.dialogRef.close();
          this.localErrorFlag = false;
          this.localErrorMessage = 'Debe seleccionar una imagen';
          this.snackBar.open(this.localMessageSnackBar, 'cerrar', {
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
      this.localFile = event.target.files[0] as File;
    }
  }
}
