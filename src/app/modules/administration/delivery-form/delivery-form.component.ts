import { Component, OnInit } from '@angular/core';
import { Delivery } from 'app/classes/delivery';
import { Contacto } from 'app/classes/contacto';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-delivery-form',
  templateUrl: './delivery-form.component.html',
  styleUrls: ['./delivery-form.component.css']
})
export class DeliveryFormComponent implements OnInit {

  administrativo: Contacto = {
    id: 1,
    nombre: 'Juan Carlos',
    apellido: 'Dinamita',
    telefono: '4 123 123',
    email: 'carlos@carlos.com'
  };
  delivery: Delivery = {
    id: 1,
  	nombre: 'pepe',
  	descripcion: 'pizzas y empanadas',
  	especialidades: 'pizza de palmitos y empanadas de panceta',
  	direccion: '52 e/ 5 y 6',
  	hora_inicio: '12:00',
  	hora_fin: '15:00',
  	telefono: '4 234 123',
  	contacto_administrativo: this.administrativo,
  	contacto_comercial: null,
  };
  
  deliveryForm: FormGroup;
  maxDescripcion = 1000 - +this.delivery.descripcion.length;
  maxEspecialidades = 500 - +this.delivery.especialidades.length;
  constructor(private formBuilder: FormBuilder) {
  }


  ngOnInit() {
    this.deliveryForm = this.formBuilder.group(this.getFormData());
  }

  submitForm(form: any): void{
    console.log('Form Data: ');
    console.log(form);
  }

  getFormData(): any {
    return {
      id: this.delivery.id,
      nombre: [this.delivery.nombre, Validators.compose([Validators.required, Validators.maxLength(50)])],
      descripcion: [this.delivery.descripcion, Validators.compose([Validators.required, Validators.maxLength(1000)])],
      especialidades: [this.delivery.especialidades, Validators.compose([Validators.required, Validators.maxLength(500)])],
      direccion: [this.delivery.direccion, Validators.compose([Validators.required, Validators.maxLength(200)])],
      hora_inicio: [this.delivery.hora_inicio, Validators.required],
      hora_fin: [this.delivery.hora_fin, Validators.required],
      telefono: [this.delivery.telefono, Validators.compose([Validators.required, Validators.maxLength(50)])],
      contacto_administrativo: this.getContactData(this.delivery.contacto_administrativo),
      contacto_comercial: null,
    };
  }

  getContactData(contacto: Contacto): any {
    return this.formBuilder.group(
      {
        id: contacto.id,
        nombre: [contacto.nombre, Validators.compose([Validators.required, Validators.maxLength(200)])],
        apellido: [contacto.apellido, Validators.compose([Validators.required, Validators.maxLength(200)])],
        telefono: [contacto.telefono, Validators.compose([Validators.required, Validators.maxLength(100)])],
        email: [contacto.telefono, Validators.compose([Validators.required, Validators.maxLength(100)])]
      }
    );
  }

  updateMaxDes(): void {
    this.maxDescripcion = 1000 - +this.deliveryForm.controls['descripcion'].value.length;
  }
  updateMaxEsp(): void {
    this.maxEspecialidades = 500 - +this.deliveryForm.controls['especialidades'].value.length;
  }
}
