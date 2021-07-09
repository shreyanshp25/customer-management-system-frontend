import { Component, OnInit } from '@angular/core';
import { Customers } from 'src/app/class/customers';
import { CustomerServiceService } from 'src/app/service/customer-service.service';

@Component({
  selector: 'app-customer-component',
  templateUrl: './customer-component.component.html',
  styleUrls: ['./customer-component.component.css']
})
export class CustomerComponentComponent implements OnInit {

  customers : Customers[];
  constructor(private customerService : CustomerServiceService) { }

  ngOnInit(): void {
    this.getCustomerList()
  }
  private getCustomerList(){
    this.customerService.getCustomerList().subscribe(data => {
      this.customers = data
    });
  }

}
