import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';

export const APP_ROUTES: Routes = [
  {
    path: 'card',
    loadComponent: () =>
      loadRemoteModule('mfe-card', './Component').then(m => m.AppComponent)
  },
  {
    path: 'products',
    loadComponent: () =>
      loadRemoteModule('mfe-products', './Component').then(m => m.AppComponent)
  },
  { path: '', redirectTo: 'card', pathMatch: 'full' }
];
