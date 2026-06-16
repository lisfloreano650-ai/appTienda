import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Clientes {

  private api = 'http://localhost:3000/api/clientes';

  constructor(private http: HttpClient) {}

  listarClientes() {
    return this.http.get(this.api);
  }

  crearCliente(cliente: any) {
    return this.http.post(this.api, cliente);
  }

  actualizarCliente(id: number, cliente: any) {
    return this.http.put(`${this.api}/${id}`, cliente);
  }

  eliminarCliente(id: number) {
    return this.http.delete(`${this.api}/${id}`);
  }
}