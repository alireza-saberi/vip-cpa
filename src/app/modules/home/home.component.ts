import {Component, OnInit, ViewChild, NgZone} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import {
  SwiperComponent,
  SwiperConfigInterface,
  SwiperDirective,
} from 'ngx-swiper-wrapper';
import {Store} from '@ngxs/store';
import {ChangeNavState} from '../../core/states/app.state';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { Router} from '@angular/router';
import {AngularFireAnalytics} from '@angular/fire/analytics';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [ trigger('boundInUp', [
    state('*', style({
      opacity: 1,
      transform: 'translate3d(0, 0, 0)'
    })),
    state('void', style({
      opacity: 0,
      transform: 'translate3d(0, -100px, 0)'
    })),
    transition('*<=>void', [ animate('2000ms')])
  ]), trigger('fadeIn', [
    state('*', style({
      opacity: 1,
      transform: 'translate3d(0, 0, 0)'
    })),
    state('void', style({
      opacity: 0,
      transform: 'translate3d(0, 100px, 0)'
    })),
    transition('*<=>void',[animate('2000ms')])
  ])]
})
export class HomeComponent implements OnInit {

  slideIndex: number = 0;
  googleReview = 'https://www.google.com/search?q=Ats+Consulting&rlz=1C1CHBF_enCA846CA847&oq=ats+Consulting&' +
    'aqs=chrome.0.69i59j35i39j0l3j69i60j69i61l2.1660j0j7&sourceid=chrome&ie=UTF-8#lrd=0x4cc91a43d55621c9:0xb3154dc625f451c5,1,,,';
  public config: SwiperConfigInterface = {
    a11y: true,
    direction: 'horizontal',
    slidesPerView: 1,
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    navigation: true,
    pagination: false
  };
  @ViewChild(SwiperComponent, { static: false }) componentRef?: SwiperComponent;
  @ViewChild(SwiperDirective, { static: false }) directiveRef?: SwiperDirective;

  constructor(private store: Store,
              private zone: NgZone,
              private router: Router,
              private meta: Meta,
              private titleService: Title,
              private translate: TranslateService,
              private analytics: AngularFireAnalytics
  ) { }
  ngOnInit() {
    this.store.dispatch(new ChangeNavState('home'));
    this.runTimer();
    this.titleService.setTitle('VIP CPA | Montreal Tax Certified Public Accountant');
    this.meta.addTag({
      name: 'description',
      content: 'Located in downtown Montreal VIP CPA offers top-notch tax and accounting services' +
        ' for businesses and individuals. We believe accounting goes far beyond numbers. We proudly' +
        ' provide our customers with prompt response time, true attention to detail, and expertise that ' +
        'maximizes tax benefits.'
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
    this.analytics.logEvent('HOME_PAGE_event', {
      lang_browser: this.translate.getBrowserLang(),
      lang_user: this.translate.currentLang
    });
  }

  runTimer() {
    this.zone.runOutsideAngular(() => {
      setInterval(() => {
        if (this.slideIndex <= 2) {
          this.slideIndex++;
          this.directiveRef.setIndex(this.slideIndex);
        } else {
          this.slideIndex = 0;
          this.directiveRef.setIndex(this.slideIndex);
        }
      }, 5000);
    });
  }

  routTo(r: string): void {
    this.router.navigate([r]);
  }
}
