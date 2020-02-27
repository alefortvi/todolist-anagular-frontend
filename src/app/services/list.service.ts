import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Job} from '../interfaces/Job';
import {State} from '../interfaces/State';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http: HttpClient) {
  }

  public createNewJob(description: string, photo: File) {
    const fd = new FormData();
    fd.append('state', '0');
    fd.append('description', description);
    fd.append('image', photo);
    return this.http.post(environment.createNewJobPath, fd);
  }

  public getJobs() {
    return this.http.get<Job[]>(environment.getJobsListPath);
  }

  public getStates() {
    return this.http.get<State[]>(environment.statesPath);
  }

  public orderBy(by: string) {
    const params = new HttpParams().set('by', by);
    return this.http.get<Job[]>(environment.orderBy, {params});
  }

  public updateState(id: string, status: number) {
    return this.http.put(environment.editStatusPath + id, {state: status});
  }

  public deleteJob(id: string) {
    return this.http.delete<Job[]>(environment.deleteJob + id);
  }

}
