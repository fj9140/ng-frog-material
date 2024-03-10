import { Injectable } from "@angular/core";

export interface GuidItem{
  id:string;
  name:string,
  document:string,
  overview:string
}

const GUIDE:GuidItem[]=[
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
  getAll():GuidItem[]{
    return GUIDE;
  }
}
