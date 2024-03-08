import { Routes } from '@angular/router';
import { LandingComponent } from '../pages/landing/landing';

export const routes: Routes = [
  {path:'',component:LandingComponent,pathMatch:'full'},
  {path:'installation',loadChildren:()=>import('../pages/installation/installation.module').then(m=>m.InstallationModule)},
];
