import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'doc-viewer',
  template: 'Loading document...',
  standalone:true
})
export class DocViewer implements OnChanges{
  @Input() docTitle:string="";
  @Input() header:string="";
  docs=true;

  constructor(private titleSrv:Title){}

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['docTitle'] && changes['docTitle'].currentValue){
      this.titleSrv.setTitle(changes['docTitle'].currentValue);
    }
  }
}
