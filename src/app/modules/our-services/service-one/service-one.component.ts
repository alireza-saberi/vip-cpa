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
      name: 'personal-tax',
      content: 'Personal Taxes as one of VIP CPA services'
    });
    this.analytics.logEvent('select_content', {
      content_type: 'personal-tax',
      item_id: 1
    });
  }

}
