import { Component, OnInit } from '@angular/core';
import {Store} from '@ngxs/store';
import {ChangeNavState} from '../../core/states/app.state';
import {Meta, Title} from '@angular/platform-browser';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-site-map',
  templateUrl: './site-map.component.html',
  styleUrls: ['./site-map.component.scss']
})
export class SiteMapComponent implements OnInit {

  constructor(private store: Store, private meta: Meta,
              private titleService: Title,
              private translate: TranslateService) { }

  ngOnInit() {
    this.store.dispatch(new ChangeNavState('-'));
    this.titleService.setTitle('VIP CPA | ' + this.translate.get('SITEMAP'));
    this.meta.addTag({
      name: 'sitemap',
      content: 'Sitemap of VIP CPA'
    });
  }

}
