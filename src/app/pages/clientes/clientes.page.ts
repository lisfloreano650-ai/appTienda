import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonButton
} from '@ionic/angular/standalone';

import { Clientes } from '../../services/clientes';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonList,
    IonItem,
    IonButton
  ]
})
export class ClientesPage implements OnInit {

  listaClientes: any[] = [];

  constructor(
    private router: Router,
    private clienteService: Clientes
  ) {}

  ngOnInit() {
    this.cargarClientes();
  }

  cargarClientes() {
    this.clienteService.listarClientes().subscribe(
      (data: any) => {
        this.listaClientes = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  nuevoCliente() {
    this.router.navigate(['/nuevo-cliente']);
  }

}