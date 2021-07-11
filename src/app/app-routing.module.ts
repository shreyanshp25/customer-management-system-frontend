import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponentComponent } from './components/customer-component/customer-component.component';

const routes: Routes = [
  {path: 'customers', component: CustomerComponentComponent},
  {path: '', redirectTo: 'customers', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
