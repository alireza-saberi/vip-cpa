import { Component, OnInit } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-service-one',
  templateUrl: './service-one.component.html',
  styleUrls: ['./service-one.component.scss']
})
export class ServiceOneComponent implements OnInit {

  constructor(private meta: Meta,
              private titleService: Title,
              private translate: TranslateService) { }

  ngOnInit() {
    this.titleService.setTitle('VIP CPA | Personal Taxes');
    this.meta.addTag({
      name: 'personal-tax',
      content: 'Personal Taxes as one of VIP CPA services'
    });
  }

}
