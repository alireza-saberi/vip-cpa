import { Component, OnInit } from '@angular/core';
import {Store} from '@ngxs/store';
import {ChangeNavState} from '../../core/states/app.state';
import {Meta, Title} from '@angular/platform-browser';
import {TranslateService} from '@ngx-translate/core';
import {AngularFireAnalytics} from '@angular/fire/analytics';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent implements OnInit {

  constructor(private store: Store, private meta: Meta,
              private titleService: Title,
              private translate: TranslateService,
              private analytics: AngularFireAnalytics) { }

  ngOnInit() {
    this.store.dispatch(new ChangeNavState('-'));
    this.titleService.setTitle('VIP CPA | Privacy Policy');
    this.meta.addTag({
      name: 'privacy-policy',
      content: 'Privacy Policy at VIP CPA'
    });
    this.analytics.logEvent('PRIVACY_PAGE_event', {
      lang_browser: this.translate.getBrowserLang(),
      lang_user: this.translate.currentLang
    });
  }

}