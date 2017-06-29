import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the PeopleServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class UserService {
  constructor (
    private http: Http
  ) {}

  getUser() {
  
   return this.http.get('http://tpl.demo.aezion.com/Mobile/GetWorkOrderItemsByWorkOrder?workorderId=4198')
      .map(response => response.json());
  
   
  }

}