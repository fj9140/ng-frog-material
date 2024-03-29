import { CommonModule } from "@angular/common";
import { Component, Directive,HostListener,HostBinding, Host } from "@angular/core";
import { RippleRenderer } from "./ripple-renderer";


@Component({
  selector:`fm-ripple`,
  exportAs:'fmRipple',
  styleUrls:['./ripple.scss','./variables.scss'],
  standalone:true,
  templateUrl:'./ripple.html',
  imports:[CommonModule]
})
export class Ripple{

  private _rippleRenderer:RippleRenderer;

  constructor(){
    this._rippleRenderer=new RippleRenderer()
  }

  launch(x:number,y:number){
    return this._rippleRenderer.fadeInRipple(x,y);
  }
}
