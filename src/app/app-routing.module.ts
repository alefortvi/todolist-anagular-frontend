import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Resolver} from './services/resolver';
import {JobsListComponent} from './components/job-list/jobs-list.component';

const routes: Routes = [
  {
    path: 'list',
    component: JobsListComponent,
    resolve: {
      // The resolver is get the states
      stateList: Resolver
    }

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
export class AppRoutingModule {
}
