import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerNameCancellation } from './customername-cancellation';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

export interface ICustomerNameService {
  getCustomerNames(zipCode: string, lastName: string): Observable<Array<CustomerNameCancellation>>
}

@Injectable({
  providedIn: 'root'
})

export class CustomerNameService implements ICustomerNameService {
  customerNames: Array<CustomerNameCancellation>

  constructor(private httpClient: HttpClient) { }

  getCustomerNames(zipCode: string, lastName: string): Observable<Array<CustomerNameCancellation>> {
    console.log("in getCustomerNames");
    
    if (lastName == undefined)
    {
      lastName = '';
    }

    return this.httpClient.get<Array<CustomerNameCancellation>>(environment.apiUrl + 'api/Names?zipCode=' + zipCode + "&lastName=" + lastName)
                  .pipe(
                    map(data => data)
                  );
  }

}
