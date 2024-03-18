import { bootstrapApplication } from "@angular/platform-browser";
import { DevApp } from "./dev-app";
import { importProvidersFrom } from "@angular/core";
import { RouterModule } from "@angular/router";
import { DEV_APP_ROUTES } from "routes";

bootstrapApplication(DevApp,{
  providers:[
    importProvidersFrom(
      RouterModule.forRoot(DEV_APP_ROUTES)
    )
  ]
});
