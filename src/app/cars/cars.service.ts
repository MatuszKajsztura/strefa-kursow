import { Injectable } from '@angular/core';
import {Car} from './models/car';
import {Observable} from 'rxjs/Observable';
import { Http } from '@angular/http';
// import 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class CarsService {
  private apiUrl = 'http://localhost:3000/api/cars';

  constructor(private http: Http) { }

  getCars(): Observable<Car[]> {
    return this.http.get(this.apiUrl)
      .map((res) => res.json());
  }
  addCar(data): Observable<Car> {
    return this.http.post(this.apiUrl,data)
    .map((res)=>res.json());
  }
  getCar(id: number): Observable<Car> {
    return this.http.get(this.apiUrl + `/${id}`)
    .map((res) => res.json());
  }
}
