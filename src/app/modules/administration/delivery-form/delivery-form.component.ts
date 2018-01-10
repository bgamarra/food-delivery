import { Component, OnInit } from '@angular/core';
import { Delivery } from 'app/classes/delivery';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-delivery-form',
  templateUrl: './delivery-form.component.html',
  styleUrls: ['./delivery-form.component.css']
})
export class DeliveryFormComponent implements OnInit {

  delivery: Delivery = {
    id: 1,
  	nombre: 'pepe',
  	descripcion: 'pizzas y empanadas',
  	especialidades: 'pizza de palmitos y empanadas de panceta',
  	direccion: '52 e/ 5 y 6',
  	hora_inicio: '12:00',
  	hora_fin: '15:00',
  	telefono: '4 234 123',
  	contacto_administrativo: null,
  	contacto_comercial: null,
  };
  deliveryData = {
    id: this.delivery.id,
    nombre: [this.delivery.nombre, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
    descripcion: this.delivery.descripcion,
    especialidades: this.delivery.especialidades,
    direccion: 'asd',
    hora_inicio: 'string',
    hora_fin: 'string',
    telefono: 'asd',
    contacto_administrativo: null,
    contacto_comercial: null,
  };
  deliveryForm: FormGroup;
  maxDescripcion = 1000 - +this.delivery.descripcion.length;
  maxEspecialidades = 500 - +this.delivery.especialidades.length;
  constructor(formBuilder: FormBuilder) {
    this.deliveryForm = formBuilder.group(this.deliveryData);
  }


  ngOnInit() {
  }

  submitForm(form: any): void{
    console.log('Form Data: ');
    console.log(form);
  }

  updateMax(msje: string): void {
    this.maxDescripcion = 1000 - +msje.length;
  }
}
