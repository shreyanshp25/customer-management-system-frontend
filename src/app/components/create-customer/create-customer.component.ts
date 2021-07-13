import { Component, OnInit } from '@angular/core';
import { Customers } from 'src/app/class/customers';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  customer: Customers = new Customers();
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    
  }
}
