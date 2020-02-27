import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {ListService} from './list.service';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class Resolver implements Resolve<object[]> {
  constructor(private listService: ListService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<object[]> {
    return this.listService.getStates();
  }
}
