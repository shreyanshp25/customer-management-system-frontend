import { HttpClient } from '@angular/common/http';
import { Identifiers } from '@angular/compiler';
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
  createCustomer(customer: Customers) : Observable<Object>{
    return this.httpclient.post<Object>(`${this.baseUrl}`, customer);
  } 
  getCustomerById(id : number) : Observable<Customers>{
    return this.httpclient.get<Customers>(`${this.baseUrl}/${id}`);
  }
  updateCustomerById(id: number, customer: Customers) : Observable<Object>{
    return this.httpclient.put<Object>(`${this.baseUrl}/${id}`, customer);
  }
  //map is getting returned therefore type is object
  deleteCustomer(id : number) : Observable<Object>{
    return this.httpclient.delete<Object>(`${this.baseUrl}/${id}`);
  }
}
