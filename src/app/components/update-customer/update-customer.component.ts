import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customers } from 'src/app/class/customers';
import { CustomerServiceService } from 'src/app/service/customer-service.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  id : number;
  customer : Customers = new Customers();
  constructor(private customerService : CustomerServiceService, private route : ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.customerService.getCustomerById(this.id).subscribe(data =>
      { 
        console.log(data);
        this.customer = data;
      }, error => {console.log(error)});
  }
  updateCustomer(){
    this.customerService.updateCustomerById(this.id, this.customer).subscribe(data => {
      console.log(data);
      this.router.navigate(['customers']);

    },
    error=> {console.log(error)});
  }
  onSubmit(){
    console.log(this.customer);
    this.updateCustomer();
  }



}
