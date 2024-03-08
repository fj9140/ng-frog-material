import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { InstallationComponent } from "./installation";
import { AppDocModule } from "../../layout/doc/app.doc.module";
import { InstallationRoutingModule } from "./installation-routing.module";

@NgModule({
  imports:[CommonModule,AppDocModule,InstallationRoutingModule],
  declarations:[InstallationComponent]
})
export class InstallationModule{}
