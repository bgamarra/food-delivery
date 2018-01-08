import { Contacto } from './contacto';

export class Delivery {
	id: number;
	nombre: string;
	descripcion: string;
	especialidades: string;
	direccion: string;
	hora_inicio: string;
	hora_fin: string;
	telefono: string;
	contacto_administrativo: Contacto;
	contacto_comercial: Contacto;
}