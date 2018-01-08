import { Component, OnInit } from '@angular/core';
import { Delivery } from 'app/classes/delivery';

@Component({
  selector: 'app-delivery-form',
  templateUrl: './delivery-form.component.html',
  styleUrls: ['./delivery-form.component.css']
})
export class DeliveryFormComponent implements OnInit {

  constructor() { }

  /*delivery: Delivery = {
    id: 1,
	nombre: 'pepe',
	descripcion: 'asd',
	especialidades: 'asd',
	direccion: 'asd',
	hora_inicio: 'string',
	hora_fin: 'string',
	telefono: 'asd',
	contacto_administrativo: null,
	contacto_comercial: null,
  };*/
  delivery = new Delivery;

  ngOnInit() {
  	this.delivery.nombre = 'pepe';
  }

}
