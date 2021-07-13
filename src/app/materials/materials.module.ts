import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';

const materialComponents = [
  MatTableModule, 
  MatFormFieldModule
];

@NgModule({
  imports: [materialComponents],
  exports : [materialComponents]
})
export class MaterialsModule { }
