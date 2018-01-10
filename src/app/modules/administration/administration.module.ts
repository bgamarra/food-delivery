import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliveryFormComponent } from './delivery-form/delivery-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SharedModule } from 'app/modules/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  	ReactiveFormsModule,
  	SharedModule
  ],
  declarations: [DeliveryFormComponent, ContactFormComponent],
  exports: [
  	DeliveryFormComponent,
  	ContactFormComponent
  ]
})
export class AdministrationModule { }
