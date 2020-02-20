import { Component, OnInit } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {TranslateService} from '@ngx-translate/core';
import {AngularFireAnalytics} from '@angular/fire/analytics';

@Component({
  selector: 'app-service-five',
  templateUrl: './service-five.component.html',
  styleUrls: ['./service-five.component.scss']
})
export class ServiceFiveComponent implements OnInit {

  constructor(private meta: Meta,
              private titleService: Title,
              private translate: TranslateService,
              private analytics: AngularFireAnalytics
  ) { }

  ngOnInit() {
    this.titleService.setTitle('VIP CPA | Financial Statements');
    this.meta.addTag({
      name: 'financial-statements',
      content: 'Financial Statements as one of VIP CPA services'
    });
    this.analytics.logEvent('select_content', {
      content_type: 'finanvial-statements',
      item_id: 5
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
