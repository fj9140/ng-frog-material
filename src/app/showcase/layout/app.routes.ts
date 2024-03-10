import { Routes } from '@angular/router';
import { LandingComponent } from '../pages/landing/landing';
import { BuuttonDemo } from '../pages/button/buttondemo';
import { AppMainComponent } from './app.main.component';

export const routes: Routes = [
  { path: '', component: LandingComponent, pathMatch: 'full' },
  {
    path: '',
    component: AppMainComponent,
    children: [
      {
        path: 'installation',
        loadChildren: () =>
          import('../pages/installation/installation.module').then(
            (m) => m.InstallationModule
          ),
      },
      { path: 'button', component: BuuttonDemo },
    ],
  },
];
