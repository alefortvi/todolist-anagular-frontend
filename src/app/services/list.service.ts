import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

import {Job} from '../interfaces/Job';
import {State} from '../interfaces/State';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  URI = 'http://localhost:4000/api/photos';

  constructor(private http: HttpClient) {
  }

  createNewJob(description: string, photo: File) {
    const fd = new FormData();
    fd.append('state', '1');
    fd.append('description', description);
    fd.append('image', photo);
    return this.http.post(environment.createNewJobPath, fd);
  }

  getJobs() {
    return this.http.get<Job[]>(environment.getJobsListPath);
  }

  getStates() {
    return this.http.get<State[]>(environment.statesPath);
  }

  getPhoto(id: string) {
    return this.http.get<Job>(`${this.URI}/${id}`);
  }

  deletePhoto(id: string) {
    return this.http.delete(`${this.URI}/${id}`);
  }

  updateState(id: string, status: number) {
    return this.http.put(environment.editStatusPath + id, {state: status});
  }
}
