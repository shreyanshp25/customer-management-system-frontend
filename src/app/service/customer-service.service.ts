import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  constructor() { }
  id : number;
  firstName : String;
  lastName : String;
  emailId : String; 
}
