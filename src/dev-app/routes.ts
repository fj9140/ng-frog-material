import { Routes } from "@angular/router";

export const DEV_APP_ROUTES:Routes=[
  {path:'button',loadComponent:()=>import('./button/button-demo').then(m=>m.ButtonDemo)},
]
