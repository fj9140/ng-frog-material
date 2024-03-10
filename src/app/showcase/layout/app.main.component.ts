import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-main',
  template: `
    <div class="layout-wrapper">
      <router-outlet></router-outlet>
    </div>
  `,
  standalone:true,
  imports:[RouterModule]
})
export class AppMainComponent{}
