import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';


const materialComponents = [
  MatTableModule, 
  MatFormFieldModule,
  FormsModule,
  MatInputModule,
  ReactiveFormsModule
];

@NgModule({
  imports: [materialComponents],
  exports : [materialComponents]
})
export class MaterialsModule { }
