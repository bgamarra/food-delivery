import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliveryFormComponent } from './delivery-form/delivery-form.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DeliveryFormComponent],
  exports: [
  	DeliveryFormComponent
  ]
})
export class AdministrationModule { }
