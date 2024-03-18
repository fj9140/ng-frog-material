import { NgModule } from "@angular/core";
import { NavList } from "./nav-list";
import { ListItem } from "./list";

@NgModule({
  imports:[NavList,ListItem],
  exports:[NavList,ListItem]
})
export class ListModule{}
