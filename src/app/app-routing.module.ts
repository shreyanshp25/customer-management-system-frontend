import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCustomerComponent } from './components/create-customer/create-customer.component';
import { CustomerComponentComponent } from './components/customer-component/customer-component.component';
import { UpdateCustomerComponent } from './components/update-customer/update-customer.component';

const routes: Routes = [
  {path: '', redirectTo: 'customers', pathMatch: 'full'},
  {path: 'customers', component: CustomerComponentComponent},
  {path: 'create-customer', component: CreateCustomerComponent},
  {path: 'update-customer/:id', component: UpdateCustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
