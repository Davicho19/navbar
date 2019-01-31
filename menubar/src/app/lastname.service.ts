import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

export interface ILastNameService {
  getLastNames() : Observable<string[]>
}

@Injectable({
  providedIn: 'root'
})
export class LastNameService {

  constructor(private httpClient: HttpClient) { }

  getLastNames() : Observable<string[]> {
    return this.httpClient.get<string[]>(environment.apiUrl +
      'api/lastname')
        .pipe(map(data=> data));
  }
}
