import { Component } from "@angular/core";
import { FrogButtonModule } from "@frog/material/button";

@Component({
  selector: "dev-app-layout",
  standalone:true,
  templateUrl:'./layout.html',
  imports:[FrogButtonModule]
})
export class DevAppLayout{}
