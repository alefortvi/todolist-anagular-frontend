import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {JobsListComponent} from './components/job-list/jobs-list.component';
import {JobComponent} from './components/job/job.component';
import {
  MAT_DIALOG_DEFAULT_OPTIONS,
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
  MatIconModule,
  MatOptionModule,
  MatSelectModule,
  MatDialogModule,
  MatDialogRef,
  MatInputModule, MatToolbarModule, MatMenuModule
} from '@angular/material';
import {Resolver} from './services/resolver';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AddJobDialogComponent} from './components/add-job-dialog-component/add-job-dialog.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    JobComponent,
    AddJobDialogComponent,
    JobsListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatGridListModule,
    MatOptionModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatInputModule,
    MatToolbarModule,
    MatMenuModule
  ],
  entryComponents: [
    AddJobDialogComponent
  ],
  providers: [
    Resolver,
    {provide: MatDialogRef, useValue: {}},
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
