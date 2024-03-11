import { NgModule,Component, Injectable, Input } from "@angular/core";
import { ActivatedRoute, RouterModule } from "@angular/router";
import { GuideItem, GuideItems } from "../../shared/guid-items/guid-items";
import { DocViewer } from "../../layout/doc-viewer/doc-viewer";



@Component({
  templateUrl:'./guide-viewer.html',
  standalone:true,
  imports:[DocViewer]
})
export class GuideViewer{
  guide:GuideItem|undefined;


  constructor(_route:ActivatedRoute,private guideItems:GuideItems){
    _route.params.subscribe({
      next:p=>{
        const guideItem=guideItems.getById(p['id']);
        if(guideItem){
          this.guide=guideItem;
        }
      }
    })
  }


}

@NgModule({
  imports:[GuideViewer,RouterModule.forChild([{path:'',component:GuideViewer}])],
  exports:[GuideViewer]
})
export class GuideViewerModule{}
