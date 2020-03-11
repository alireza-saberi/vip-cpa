import { Component, OnInit } from '@angular/core';
import {ChangeNavState} from '../../core/states/app.state';
import {Store} from '@ngxs/store';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Meta, Title} from '@angular/platform-browser';
import {TranslateService} from '@ngx-translate/core';
import {AngularFireAnalytics} from '@angular/fire/analytics';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  lat: number = 45.499355;
  lng: number = -73.574097;

  vipAddress = 'https://www.google.ca/maps/place/1410+Rue+Stanley+%23405,+Montr%C3%A9al,+QC+H3A+2W6/@45.4993508,-73.5762726,17z' +
    '/data=!3m1!4b1!4m5!3m4!1s0x4cc91a422ab4961b:0xe9756e733fae8dce!8m2!3d45.4993508!4d-73.5740839';
  constructor(private store: Store,
              private meta: Meta,
              private titleService: Title,
              private translate: TranslateService,
              private analytics: AngularFireAnalytics
              ) { }

  ngOnInit() {
    this.store.dispatch(new ChangeNavState('contact'));
    this.titleService.setTitle('VIP CPA | Contact Us');
    this.meta.addTag({
      name: 'description',
      content: '1410 Rue Stanley, unit #405, Montréal, QC H3A 2W6 ' +
        'Phone Number. +1(514) 227-8000. E-mail Address. info@vipcpa.ca'
    });
    this.meta.addTag({
      name: 'keywords',
      content: 'Accountant, Downtown, Montreal, Tax, Individual Taxation, Personal Tax, ' +
        'Tax deduction, Payroll, Bookkeeping, Financial statement, Contact us'
    });
    this.meta.addTag({
      name: 'robots',
      content: 'index, follow'
    });
    this.analytics.logEvent('CONTACT_US_PAGE_event', {
      lang_browser: this.translate.getBrowserLang(),
      lang_user: this.translate.currentLang
    });
  }
  contactBy(method: string) {
    this.analytics.logEvent('GOTO_' + method.toUpperCase() + 'CONTACT_US_event');
  }
}
