import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { throwError } from 'rxjs';
// import { map } from 'rxjs/add/operator/map';
import {catchError, map } from 'rxjs/operators';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInputError } from '../common/bad-input-error';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private url: string, private http: Http) {
  }
  getAll(){
    return this.http.get(this.url)
        .pipe(map(response => response.json()))
        .pipe(catchError(this.handlerError));;
  }
  create(resourse) {
    // return throwError(new AppError());
    return this.http.post(this.url, JSON.stringify(resourse))
        .pipe(map(response => response.json()))
        .pipe(catchError(this.handlerError));
  }

  update(id) {
    return this.http.patch(this.url +'/'+id, JSON.stringify({isRead: true}))
        .pipe(map(response => response.json()))
        .pipe(catchError(this.handlerError));
  }
  delete(id) {
    // return throwError(new AppError());
    return this.http.delete(this.url+'/'+id)
        .pipe(map(response => response.json()))
        .pipe(catchError(this.handlerError));
  }
  private handlerError(err: Response){
    if(err.status === 400){
      return throwError(new BadInputError(err.json()));
    }
    if(err.status === 404){
      return throwError(new NotFoundError());
    }
    return throwError(new AppError(err));
  }

}
