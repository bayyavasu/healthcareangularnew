import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent/parent.component';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ParentComponent],  exports:[ParentComponent]

 
})
export class SlokamModule { }
