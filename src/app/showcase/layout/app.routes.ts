import { Routes } from '@angular/router';
import { LandingComponent } from '../pages/landing/landing';
import { AppMainComponent } from './app.main.component';

export const routes: Routes = [
  { path: '', component: LandingComponent, pathMatch: 'full' },
  {
    path: '',
    component: AppMainComponent,
    children: [
      {
        path:'guides/:id',
        loadChildren:()=>import('../pages/guide-viewer/guide-viewer').then(m=>m.GuideViewerModule)

      },
    ],
  },
];
