import { Injectable } from "@angular/core"

export interface DocItem{
  id:string
  name:string
}

const COMPONENTS='Components'

const DOCS:{[key:string]:DocItem[]}={
  [COMPONENTS]:[
    {
      id:'button',
      name:'Button'
    }
  ]
}

@Injectable({
  providedIn:'root'
})
export class DocItems{
  getBySection(section:string){
    if(section===COMPONENTS){
      return DOCS[COMPONENTS]
    }
    return [];
  }
}
