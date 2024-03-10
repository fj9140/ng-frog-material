import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-doc',
  templateUrl: './app.doc.html'
})
export class AppDoc implements OnChanges{
  @Input() docTitle:string="";
  @Input() header:string="";

  constructor(private titleSrv:Title){}

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['docTitle'] && changes['docTitle'].currentValue){
      this.titleSrv.setTitle(changes['docTitle'].currentValue);
    }
  }
}
