import { Component } from "@angular/core";
import { SidenavModule } from "@frog/material/sidenav";
import { ListModule } from "@frog/material/list";
import { RouterModule } from "@angular/router";

@Component({
  selector: "dev-app-layout",
  standalone:true,
  templateUrl:'./layout.html',
  imports:[SidenavModule,ListModule,RouterModule]
})
export class DevAppLayout{
  navItems=[
    {name:'Button',route:'/button'}
  ]
}
