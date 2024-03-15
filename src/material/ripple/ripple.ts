import { Directive } from "@angular/core";

@Directive({
  selector:`[frog-ripple],[frogRipple]`,
  exportAs:'matRipple',
  standalone:true
})
export class FrogRipple{}
