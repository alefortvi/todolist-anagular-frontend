import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotoFormComponent } from './components/photo-form/photo-form.component'
import { PhotoPreviewComponent } from './components/photo-preview/photo-preview.component'
import {Resolver} from './services/resolver';
import {JobsListComponent} from './components/job-list/jobs-list.component';

const routes: Routes = [
  {
    path: 'list',
    component: JobsListComponent,
    resolve: {
      // The resolver is just for have some data before load the componet
      stateList: Resolver
    }

  },
  {
    path: 'photos/new',
    component: PhotoFormComponent
  },
  {
    path: 'photos/:id',
    component: PhotoPreviewComponent
  },
  {
    path: '',
    redirectTo: '/list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
