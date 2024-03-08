import { Injectable,signal } from "@angular/core";
import { AppConfig } from "../domain/appconfig";

@Injectable({
  providedIn: 'root'
})
export class AppConfigService{
  private _config:AppConfig={
    darkMode:false
  }

  config=signal<AppConfig>(this._config)
}
