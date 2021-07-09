import { Component, OnInit } from '@angular/core';
import { CustomerServiceService } from 'src/app/service/customer-service.service';

@Component({
  selector: 'app-customer-component',
  templateUrl: './customer-component.component.html',
  styleUrls: ['./customer-component.component.css']
})
export class CustomerComponentComponent implements OnInit {

  customers : CustomerServiceService[];
  constructor() { }

  ngOnInit(): void {
    this.customers = [
      {
        "id" : 1,
        "firstName": "raju",
        "lastName": "sharma",
        "emailId": "raju@gmail.com"
      },
      {
        "id" : 2,
        "firstName": "rahul",
        "lastName": "singh",
        "emailId": "rahul2@gmail.com"
      }
    ]
  }

}
