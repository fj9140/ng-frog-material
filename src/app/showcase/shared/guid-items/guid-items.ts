import { Injectable } from "@angular/core";

export interface GuideItem{
  id:string;
  name:string,
  document:string,
  overview:string
}

const GUIDE:GuideItem[]=[
  {
    id:"getting-started",
    name:"Getting Started",
    document:"/doc-content/guides/getting-started.html",
    overview:'Add Frog Material to your project'
  }
]

@Injectable({
  providedIn:'root'
})
export class GuideItems{
  getAll():GuideItem[]{
    return GUIDE;
  }
  getById(id:string){
    return GUIDE.find(g=>g.id===id);
  }
}
