import { Component, OnInit } from '@angular/core';
import {ChangeNavState} from '../../core/states/app.state';
import {Store} from '@ngxs/store';
import {Meta, Title} from '@angular/platform-browser';
import {TranslateService} from '@ngx-translate/core';
import {AngularFireAnalytics} from '@angular/fire/analytics';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor(private store: Store,
              private meta: Meta,
              private titleService: Title,
              private translate: TranslateService,
              private analytics: AngularFireAnalytics
  ) { }

  ngOnInit() {
    this.store.dispatch(new ChangeNavState('aboutus'));
    this.titleService.setTitle('VIP CPA | About');
    this.meta.addTag({
      name: 'description',
      content: 'Founded in 2004 by Hasan Salhab (MBA) as ATS-consulting in downtown Montreal offers ' +
        'top-notch tax and accounting services for businesses and individuals.' }, true);
    this.meta.addTag({
      name: 'keywords',
      content: 'Accountant, Downtown, Montreal, Tax, Individual Taxation, Personal Tax, ' +
        'Tax deduction, Payroll, Bookkeeping, Financial statement'
    }, true);
    this.meta.addTag({
      name: 'robots',
      content: 'index, follow'
    }, true);
    this.analytics.logEvent('ABOUT_US_PAGE_event', {
      lang_browser: this.translate.getBrowserLang(),
      lang_user: this.translate.currentLang
    });
  }

}
