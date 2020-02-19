import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PhotosListComponent } from './components/photos-list/photos-list.component';
import { PhotoFormComponent } from './components/photo-form/photo-form.component';
import { PhotoPreviewComponent } from './components/photo-preview/photo-preview.component';
import { JobComponent } from './components/job/job.component';
import {MatGridListModule} from "@angular/material";
import {Resolver} from "./services/resolver";
import {MatOptionModule} from "@angular/material";
import {MatSelectModule} from "@angular/material";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    PhotosListComponent,
    PhotoFormComponent,
    PhotoPreviewComponent,
    JobComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatGridListModule,
    MatOptionModule,
    MatSelectModule,
    BrowserAnimationsModule
  ],
  providers: [Resolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
