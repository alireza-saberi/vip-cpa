import { Component, OnInit } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {TranslateService} from '@ngx-translate/core';
import {AngularFireAnalytics} from '@angular/fire/analytics';

@Component({
  selector: 'app-service-three',
  templateUrl: './service-three.component.html',
  styleUrls: ['./service-three.component.scss']
})
export class ServiceThreeComponent implements OnInit {

  constructor(private meta: Meta,
              private titleService: Title,
              private translate: TranslateService,
              private analytics: AngularFireAnalytics) { }

  ngOnInit() {
    this.titleService.setTitle('VIP CPA | Bookkeeping');
    this.meta.addTag({
      name: 'bookkeeping-tax',
      content: 'Bookkeeping as one of VIP CPA services'
    });
    this.analytics.logEvent('select_content', {
      content_type: 'bookkeeping',
      item_id: 3
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
