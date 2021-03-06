import { Component, OnInit } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {TranslateService} from '@ngx-translate/core';
import {AngularFireAnalytics} from '@angular/fire/analytics';

@Component({
  selector: 'app-service-two',
  templateUrl: './service-two.component.html',
  styleUrls: ['./service-two.component.scss']
})
export class ServiceTwoComponent implements OnInit {

  constructor(private meta: Meta,
              private titleService: Title,
              private translate: TranslateService,
              private analytics: AngularFireAnalytics) { }

    ngOnInit() {
      this.titleService.setTitle('VIP CPA | Corporate Taxes');
      this.meta.addTag({
        name: 'description',
        content: 'VIP CPA in downtown Montreal is a full-service accounting firm that can provide a variety of tax' +
          ' services including corporate tax services; VIP CPA can ct as your corporate tax accountant or provide' +
          ' corporate tax services for you.'
      }, true);
      this.meta.addTag({
        name: 'keywords',
        content: 'Accountant, Downtown, Montreal, Tax, Corporate Tax, least amount of corporate tax payable'
      }, true);
      this.meta.addTag({
        name: 'robots',
        content: 'index, follow'
      }, true);
      this.analytics.logEvent('select_content', {
        content_type: 'corporate-tax',
        item_id: 2
      });
      this.scrollToTop();
    }
  scrollToTop() {
    (function smoothscroll() {
      const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - (currentScroll / 8));
      }
    })();
  }

}
