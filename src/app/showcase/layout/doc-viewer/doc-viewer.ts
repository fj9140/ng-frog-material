import { HttpClient, HttpClientModule, HttpErrorResponse } from "@angular/common/http";
import { Component, Input, OnChanges, SimpleChanges,Injectable, ElementRef } from "@angular/core";
import { tap,shareReplay,Observable, Subscription } from "rxjs";

@Injectable({
  providedIn:'root',
})
class DocFetcher{
  private _cache:Record<string,Observable<string>>={}
  constructor(private httpClient:HttpClient){}

  fetchDocument(url:string){
    if(this._cache[url]){
      this._cache[url]
    }
    const stream= this.httpClient.get(url,{responseType:'text'}).pipe(
      shareReplay(1),
    );
    return stream.pipe(
      tap(()=>{
        this._cache[url]=stream
      })
    )
  }
}

@Component({
  selector: 'doc-viewer',
  template: 'Loading document...',
  standalone:true,
  imports:[HttpClientModule]
})
export class DocViewer implements OnChanges{

  private _documentFetchSubscription:Subscription|undefined;

  @Input() set documentUrl(url:string|undefined){
    if(url){
      this._fetchDocument(url);
    }
  }

  constructor(private _docFetcher:DocFetcher,private _elementRef:ElementRef){}

  ngOnChanges(changes: SimpleChanges): void {
  }

  private _fetchDocument(url:string){
    this._documentFetchSubscription?.unsubscribe();
    this._documentFetchSubscription=this._docFetcher.fetchDocument(url).subscribe({
      next:(doc)=>{
        this.updateDocument(doc)
      },
      error:(error)=>{
        this.showError(url,error)
      }
  })
  }

  private updateDocument(rawDoc:string){}

  private showError(url:string,error:HttpErrorResponse){
    console.error(`Error fetching document ${url}`,error);
    this._elementRef.nativeElement.innerHTML=`Error fetching document ${url}. Error: ${error.message}`;
  }
}
