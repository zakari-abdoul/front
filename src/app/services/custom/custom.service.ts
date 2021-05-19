import { Injectable } from '@angular/core';
import { Observable, of, throwError, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { ServicesUtils } from '../../core/app.service.utils';

const httpOptions = {
  // tslint:disable-next-line:whitespace
  // tslint:disable-next-line:object-literal-key-quotes
  // tslint:disable-next-line:whitespace
  headers: new HttpHeaders({'Content-Type': 'application/json'}).set
  // tslint:disable-next-line:max-line-length
  ('Authorization', 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTU4MzcxNzgzNCwiZXhwIjoxNTgzODA0MjM0fQ.66cn4wYqKtLro68Pjn2A_ddiOnG94lBr8MRm01SLFLS9v0szJqjklU3Ac61tWkYRmqJiyWKB1HuvVdy8UPR31g')
};

const apiUrl = ServicesUtils.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class CustomService {

  constructor(private http: HttpClient) { }

  // handel error of api
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  getStats (): Observable<Object> {
    return this.http.get(apiUrl +'ping/')
    // return this.http.get<Object>(apiUrl +'sai/attempssai/in/',ServicesUtils.options)
      .pipe(tap(heroes => console.log('fetched Stats')),
        catchError(this.handleError('getStats', []))
      );
  }
  // getStats (): Observable<Object> {
  //   return this.http.get(apiUrl +'sai/attempssai/in/')
  //   // return this.http.get<Object>(apiUrl +'sai/attempssai/in/',ServicesUtils.options)
  //     .pipe(tap(heroes => console.log('fetched Stats')),
  //       catchError(this.handleError('getStats', []))
  //     );
  // }

  getClient(id: string): Observable<Object> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Object>(url).pipe(
      tap(_ => console.log(`fetched User id=${id}`)),
      catchError(this.handleError<Object>(`getUser id=${id}`))
    );
  }

}