import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonItem,
  IonInput,
  IonButton
} from '@ionic/angular/standalone';

import { Clientes } from '../../services/clientes';

@Component({
  selector: 'app-nuevo-cliente',
  templateUrl: './nuevo-cliente.page.html',
  styleUrls: ['./nuevo-cliente.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonItem,
    IonInput,
    IonButton
  ]
})
export class NuevoClientePage {

  nombre: string = '';
  correo: string = '';
  telefono: string = '';

  constructor(private clienteService: Clientes) { }

  guardar() {

    const cliente = {
      cli_identificacion: '1234567890',
      cli_nombre: this.nombre,
      cli_telefono: this.telefono,
      cli_correo: this.correo,
      cli_direccion: 'La Libertad',
      cli_pais: 'Ecuador',
      cli_ciudad: 'Santa Elena'
    };

    this.clienteService.crearCliente(cliente).subscribe({
      next: (resp) => {

        console.log('RESPUESTA:', resp);

        alert('Cliente guardado en MySQL');

        this.nombre = '';
        this.correo = '';
        this.telefono = '';

      },

      error: (err) => {

        console.error('ERROR COMPLETO:', err);

        alert(JSON.stringify(err.error));

      }
    });

  }
}