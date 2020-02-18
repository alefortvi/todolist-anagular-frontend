import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Job} from '../list/interace/job';
import {map} from 'rxjs/operators';

@Injectable()
export class ListService {


  constructor(private http: HttpClient) { }

  // createPhoto(title: string, description: string, photo: File) {
  //   const fd = new FormData();
  //   fd.append('title', title);
  //   fd.append('description', description);
  //   fd.append('image', photo);
  //   return this.http.post(this.URI, fd);
  // }

  // getJobs() {
  //   return this.http.get<Job[]>(environment.getList).subscribe(v => {
  //     console.log(v);
  //   });
  // }


  getJobs(): Observable <Job[]> {
    return this.http.get<Job[]>(environment.getList).pipe(
      map((response: Job[]) => {
        console.log('asdadadsasd', response);
        return response;
      })
    );
  }

  // getPhoto(id: string) {
  //   return this.http.get<Photo>(`${this.URI}/${id}`);
  // }
  //
  // deletePhoto(id: string) {
  //   return this.http.delete(`${this.URI}/${id}`);
  // }
  //
  // updatePhoto(id: string, title: string, description: string) {
  //   return this.http.put(`${this.URI}/${id}`, {title, description});
  // }

}
