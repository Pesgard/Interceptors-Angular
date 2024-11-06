import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/features/shell/auth.routes'),
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.component'),
  },
  {
    path: 'pokemon',
    loadComponent: () => import('./pages/pokemon-list/pokemon-list.component').then(m => m.PokemonListComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
