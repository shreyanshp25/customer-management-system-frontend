import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customers } from 'src/app/class/customers';
import { CustomerServiceService } from 'src/app/service/customer-service.service';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent implements OnInit {

  id : number;
  customer : Customers = new Customers();
  constructor(private customerService : CustomerServiceService, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.customerService.getCustomerById(this.id).subscribe(data => {
      this.customer = data;
    },
    error => console.log(error));
  }

}
