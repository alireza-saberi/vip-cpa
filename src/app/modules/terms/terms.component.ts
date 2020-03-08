import { Component, OnInit } from '@angular/core';
import {ChangeNavState} from '../../core/states/app.state';
import {Store} from '@ngxs/store';
import {Meta, Title} from '@angular/platform-browser';
import {TranslateService} from '@ngx-translate/core';
import {AngularFireAnalytics} from '@angular/fire/analytics';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss']
})
export class TermsComponent implements OnInit {

  constructor(private store: Store, private meta: Meta,
              private titleService: Title,
              private translate: TranslateService,
              private analytics: AngularFireAnalytics) { }

  ngOnInit() {
    this.store.dispatch(new ChangeNavState('-'));
    this.titleService.setTitle('VIP CPA | Terms & Conditions');
    this.meta.addTag({
      name: 'description',
      content: 'Terms & Conditions at VIP CPA'
    });
    this.meta.addTag({
      name: 'keywords',
      content: 'Accountant, Downtown, Montreal, Tax, Individual Taxation, Personal Tax, ' +
        'Tax deduction, Payroll, Bookkeeping, Financial statement, Terms'
    });
    this.meta.addTag({
      name: 'robots',
      content: 'index, follow'
    });
    this.analytics.logEvent('TERMS_PAGE_event', {
      lang_browser: this.translate.getBrowserLang(),
      lang_user: this.translate.currentLang
    });
  }

}
