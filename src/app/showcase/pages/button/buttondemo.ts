import { Component } from "@angular/core";
import { AppDocModule } from "../../layout/doc/app.doc.module";
import { FrogButtonModule } from "frogng/button";

@Component({
  templateUrl:'./buttondemo.html',
  standalone:true,
  imports:[AppDocModule,FrogButtonModule]
})
export class BuuttonDemo{}
