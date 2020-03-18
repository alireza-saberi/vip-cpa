import { Component, OnInit } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {TranslateService} from '@ngx-translate/core';
import {AngularFireAnalytics} from '@angular/fire/analytics';

@Component({
  selector: 'app-service-one',
  templateUrl: './service-one.component.html',
  styleUrls: ['./service-one.component.scss']
})
export class ServiceOneComponent implements OnInit {

  constructor(private meta: Meta,
              private titleService: Title,
              private translate: TranslateService,
              private analytics: AngularFireAnalytics
  ) { }

  ngOnInit() {
    this.titleService.setTitle('VIP CPA | Personal Taxes');
    this.meta.addTag({
      name: 'description',
      content: 'You don’t have to worry about incorrectly filing your taxes. Located in downtown Montreal, VIP CPA offers' +
        ' you top-notch individual taxation help, you will be able to quickly and accurately process and file your tax return' +
        ' while providing the individual attention you deserve'
    }, true);
    this.meta.addTag({
      name: 'keywords',
      content: 'Accountant, Downtown, Montreal, Tax, Individual Taxation, Personal Tax, Tax deduction'
    }, true);
    this.meta.addTag({
      name: 'robots',
      content: 'index, follow'
    }, true);
    this.analytics.logEvent('select_content', {
      content_type: 'individual-tax',
      item_id: 1
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
