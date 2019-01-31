import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

export interface IZipCodeService {
  getZipCodes(): Observable<string[]>
}

@Injectable({
  providedIn: 'root'
})
export class ZipcodeService implements IZipCodeService {

  constructor(private httpClient: HttpClient) { }

  getZipCodes(): Observable<string[]> {
    return this.httpClient.get<string[]>(environment.apiUrl + 'api/zipcode')
               .pipe(map(data => data));
  }
}
