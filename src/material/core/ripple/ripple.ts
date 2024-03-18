import { Component, Directive } from "@angular/core";

@Component({
  selector:`fm-ripple`,
  exportAs:'fmRipple',
  styleUrls:['./ripple.scss','./variables.scss'],
  standalone:true,
  templateUrl:'./ripple.html'
})
export class Ripple{}
