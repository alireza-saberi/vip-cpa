import { Component, OnInit } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {TranslateService} from '@ngx-translate/core';
import {AngularFireAnalytics} from '@angular/fire/analytics';

@Component({
  selector: 'app-service-four',
  templateUrl: './service-four.component.html',
  styleUrls: ['./service-four.component.scss']
})
export class ServiceFourComponent implements OnInit {

  constructor(private meta: Meta,
              private titleService: Title,
              private translate: TranslateService,
              private analytics: AngularFireAnalytics
  ) { }

  ngOnInit() {
    this.titleService.setTitle('VIP CPA | Payroll');
    this.meta.addTag({
      name: 'payroll',
      content: 'Payroll as one of VIP CPA services'
    });
    this.analytics.logEvent('select_content', {
      content_type: 'payroll',
      item_id: 4
    });
  }
}
