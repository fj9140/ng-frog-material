import { Component } from "@angular/core";
import { AppTopbarComponent } from "../../layout/topbar/app-topbar";
import { CommonModule } from "@angular/common";
import { AppConfigService } from "../../services/appconfig.service";


@Component({
  templateUrl: './landing.html',
  selector:'landing',
  standalone:true,
  imports: [AppTopbarComponent,CommonModule]
})
export class LandingComponent {

  constructor(private configSrv: AppConfigService) {}
  get landingClass(){
    return {
      'layout-light':!this.isDarkMode
    }
  }

  get isDarkMode(){
    return this.configSrv.config().darkMode;
  }
}
