import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customers } from '../class/customers';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  private baseUrl = "http://localhost:8080/api/v1/customers";
  constructor(private httpclient : HttpClient) { }

  getCustomerList() : Observable<Customers[]>{
    return this.httpclient.get<Customers[]>(`${this.baseUrl}`);
  }
}
