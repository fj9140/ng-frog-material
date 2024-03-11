import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppMenuComponent } from './menu/menu';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  template: `
    <div class="layout-wrapper">
      <div ngClass="layout-content">
        <app-menu></app-menu>
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styleUrl:'./app.main.component.scss',
  standalone: true,
  imports: [RouterModule, AppMenuComponent,CommonModule],
})
export class AppMainComponent {}
