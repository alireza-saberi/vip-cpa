import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-vip-cpa';
  sideNav: boolean;

  constructor(private translate: TranslateService) {
    const browserLang = translate.getBrowserLang();
    if (browserLang === 'en' || browserLang === 'fr' || browserLang === 'zh') {
      translate.setDefaultLang(translate.getBrowserLang());
    } else {
      translate.setDefaultLang('en');
    }
  }

  openSideNav($event) {
    if (!this.sideNav) {
      if ($event) {
        this.sideNav = true;
      }
    }
  }

  closeSideNav($event) {
    if (this.sideNav) {
      if ($event) {
        this.sideNav = false;
      }
    }

  }
}
