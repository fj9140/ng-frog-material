import { Component, HostBinding, Input, ElementRef } from '@angular/core';
import { ButtonBase } from './button-base';
import { CommonModule } from '@angular/common';
import { RippleModule } from '../core/ripple/module';
import { Elevation } from '../core/elevation/elevation';

@Component({
  selector: `button[fm-button],button[fm-text-button],button[fm-outlined-button],button[fm-filled-button],button[fm-tonal-button],button[fm-elevated-button]`,
  templateUrl: './button.html',
  styleUrls: ['./variables.scss', './button.scss'],
  imports: [CommonModule, RippleModule, Elevation],
  standalone: true,
})
export class Button extends ButtonBase {
  outlined: boolean = false;
  elevated: boolean = false;
  constructor(private element: ElementRef) {
    super();
    this.outlined = element.nativeElement.hasAttribute('fm-outlined-button')
      ? true
      : false;
    this.elevated = element.nativeElement.hasAttribute('fm-elevated-button');
  }
}
