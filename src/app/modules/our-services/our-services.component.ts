import { Component, OnInit } from '@angular/core';
import {ChangeNavState} from '../../core/states/app.state';
import {Store} from '@ngxs/store';
import {Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {TranslateService} from '@ngx-translate/core';
import {AngularFireAnalytics} from '@angular/fire/analytics';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss']
})
export class OurServicesComponent implements OnInit {

  constructor(private store: Store,
              private router: Router,
              private translate: TranslateService,
              private analytics: AngularFireAnalytics
  ) { }

  ngOnInit() {
    this.store.dispatch(new ChangeNavState('service'));
    this.analytics.logEvent('OUR_SERVICES_PAGE_event', {
      lang_browser: this.translate.getBrowserLang(),
      lang_user: this.translate.currentLang
    });
  }

  routTo(r: string): void {
    this.router.navigate([r]);
  }

}
