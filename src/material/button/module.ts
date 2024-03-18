import { NgModule } from "@angular/core";
import { Button } from "./button";
import { Ripple } from "../core/ripple/ripple";

@NgModule({
  imports:[Button,Ripple],
  exports:[Button]
})
export class FrogButtonModule{}
