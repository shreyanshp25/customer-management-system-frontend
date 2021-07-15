import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customers } from 'src/app/class/customers';
import { CustomerServiceService } from 'src/app/service/customer-service.service';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  customer: Customers = new Customers();
  constructor(private customerService: CustomerServiceService, private router: Router) { }

  ngOnInit(): void {
  }
  addCustomer(){
    this.customerService.createCustomer(this.customer).subscribe(data => {
      console.log(data);
      this.navigateCustomerList();
    },
    error => {console.log(error)});
  }

  navigateCustomerList(){
    this.router.navigate(['/customers'])
  }

  onSubmit(){
    console.log(this.customer);
    this.addCustomer();
  }
}
