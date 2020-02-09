import { Component, OnInit } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-service-three',
  templateUrl: './service-three.component.html',
  styleUrls: ['./service-three.component.scss']
})
export class ServiceThreeComponent implements OnInit {

  constructor(private meta: Meta,
              private titleService: Title,
              private translate: TranslateService) { }

  ngOnInit() {
    this.titleService.setTitle('VIP CPA | Bookkeeping');
    this.meta.addTag({
      name: 'bookkeeping-tax',
      content: 'Bookkeeping as one of VIP CPA services'
    });
  }

}
