import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },

  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then(m => m.LoginPage)
  },

  {
    path: 'clientes',
    loadComponent: () => import('./pages/clientes/clientes.page').then(m => m.ClientesPage)
  },

  {
    path: 'detalle-cliente',
    loadComponent: () => import('./pages/detalle-cliente/detalle-cliente.page').then(m => m.DetalleClientePage)
  },

  {
    path: 'nuevo-cliente',
    loadComponent: () => import('./pages/nuevo-cliente/nuevo-cliente.page').then(m => m.NuevoClientePage)
  }

];