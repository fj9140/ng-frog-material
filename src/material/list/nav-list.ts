import { Component } from "@angular/core";

@Component({
  template:'<ng-content></ng-content>',
  selector:'fm-nav-list',
  standalone:true,
  exportAs:'fmNavList',
})
export class NavList{}
