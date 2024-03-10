import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppMenuComponent } from './menu/menu';

@Component({
  selector: 'app-main',
  template: `
    <div class="layout-wrapper">
      <div class="layout-content">
        <app-menu></app-menu>
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  standalone: true,
  imports: [RouterModule, AppMenuComponent],
})
export class AppMainComponent {}
