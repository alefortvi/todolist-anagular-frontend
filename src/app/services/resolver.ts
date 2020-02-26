import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {ListService} from './list.service';

@Injectable()
export class Resolver implements Resolve<object[]> {
  constructor(private listService: ListService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<object[]> {
    return this.listService.getStates();
  }
}
