import { Inject, signal, effect, PLATFORM_ID, Injectable } from '@angular/core';
import { AppConfig } from '../domain/appconfig';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class AppConfigService {
  private _config: AppConfig = {
    darkMode: false,
    theme: 'arya-green',
  };

  config = signal<AppConfig>(this._config);

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    effect(() => {
      const config = this.config();
      if (isPlatformBrowser(this.platformId)) {
        if (this.updateStyle(config)) {
          this.changeTheme();
        }
      }
    });
  }

  updateStyle(config: AppConfig) {
    return (
      config.darkMode !== this._config.darkMode ||
      config.theme !== this._config.theme
    );
  }

  changeTheme() {
    const config = this.config();

    const themeLink = <HTMLLinkElement>document.getElementById('theme-link');
    const themeLinkHref = themeLink.getAttribute('href');
    if (themeLinkHref) {
      const newHref = themeLinkHref
        ?.split('/')
        .map((segment) => {
          if (config.theme) {
            return segment == this._config.theme
              ? (segment = config.theme)
              : segment == `theme-${this._config.darkMode}`
              ? `theme-${config.darkMode}`
              : segment;
          } else {
            return segment;
          }
        })
        .join('/');
      this.replaceThemeLink(newHref);
    }
  }

  replaceThemeLink(href: string) {
    const id = 'theme-link';
    let themeLink = <HTMLLinkElement>document.getElementById(id);
    const cloneLink = <HTMLLinkElement>themeLink.cloneNode(true);

    cloneLink.setAttribute('href', href);
    cloneLink.setAttribute('id', `${id}-clone`);

    themeLink.parentNode?.insertBefore(cloneLink, themeLink.nextSibling);
    cloneLink.addEventListener('load', () => {
      themeLink.remove();
      cloneLink.setAttribute('id', id);
    });
  }
}
