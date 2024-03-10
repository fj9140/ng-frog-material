import { Component } from "@angular/core";
import { GuideItems } from "../../shared/guid-items/guid-items";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { DocItems } from "../../shared/doc-items/doc-items";

@Component({
  selector:"app-menu",
  templateUrl:"./menu.html",
  standalone:true,
  imports:[CommonModule,RouterModule]
})
export class AppMenuComponent{
  constructor(public guideItems:GuideItems,public docItems:DocItems){}
}
