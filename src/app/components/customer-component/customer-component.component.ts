import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customers } from 'src/app/class/customers';
import { CustomerServiceService } from 'src/app/service/customer-service.service';

@Component({
  selector: 'app-customer-component',
  templateUrl: './customer-component.component.html',
  styleUrls: ['./customer-component.component.css']
})
export class CustomerComponentComponent implements OnInit {

  customers : Customers[];
  constructor(private customerService : CustomerServiceService, private router : Router) { }

  ngOnInit(): void {
    this.getCustomerList()
  }
  private getCustomerList(){
    this.customerService.getCustomerList().subscribe(data => {
      this.customers = data
    });
  }

  private updateCustomer(id : number){
    this.router.navigate(['update-customer', id]);
  }
  private deleteCustomer(id: number){
    this.customerService.deleteCustomer(id).subscribe(data => {
      console.log(data);
      this.getCustomerList();
    },
    error => {console.log(error);});
  }

}
