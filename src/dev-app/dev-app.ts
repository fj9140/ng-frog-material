import { Component } from "@angular/core";
import { DevAppLayout } from "./layout/layout";
import { RouterModule } from "@angular/router";

@Component({
  selector: "dev-app",
  template: "<dev-app-layout><router-outlet></router-outlet></dev-app-layout>",
  standalone:true,
  imports:[DevAppLayout,RouterModule]
})
export class DevApp{}
