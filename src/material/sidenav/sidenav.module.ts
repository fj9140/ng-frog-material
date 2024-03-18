import { NgModule } from "@angular/core";
import { Sidenav, SidenavContainer } from "./sidenav";

@NgModule({
  declarations:[SidenavContainer,Sidenav],
  exports:[SidenavContainer,Sidenav]
})
export class SidenavModule{}
