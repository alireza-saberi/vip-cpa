import { Component, OnInit } from '@angular/core';
import {Store} from '@ngxs/store';
import {Meta, Title} from '@angular/platform-browser';
import {TranslateService} from '@ngx-translate/core';
import {AngularFireAnalytics} from '@angular/fire/analytics';
import {ChangeNavState} from '../../core/states/app.state';

@Component({
  selector: 'app-rebranding',
  templateUrl: './rebranding.component.html',
  styleUrls: ['./rebranding.component.scss']
})
export class RebrandingComponent implements OnInit {

  constructor(private store: Store,
              private meta: Meta,
              private titleService: Title,
              private translate: TranslateService,
              private analytics: AngularFireAnalytics) { }

  ngOnInit() {
    this.store.dispatch(new ChangeNavState('-'));
    this.titleService.setTitle('VIP CPA | Rebranding ATS Consulting');
    this.meta.addTag({
      name: 'description',
      content: 'About Rebranding of ATS Consulting to VIP CPA'
    });
    this.meta.addTag({
      name: 'keywords',
      content: 'Accountant, Downtown, Montreal, Tax, Individual Taxation, Personal Tax, ' +
        'Tax deduction, Payroll, Bookkeeping, Financial statement'
    });
    this.meta.addTag({
      name: 'robots',
      content: 'index, follow'
    });
    this.analytics.logEvent('REBRABDING_PAGE_event', {
      lang_browser: this.translate.getBrowserLang(),
      lang_user: this.translate.currentLang
    });
  }


}
