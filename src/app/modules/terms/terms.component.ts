import { Component, OnInit } from '@angular/core';
import {ChangeNavState} from '../../core/states/app.state';
import {Store} from '@ngxs/store';
import {Meta, Title} from '@angular/platform-browser';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss']
})
export class TermsComponent implements OnInit {

  constructor(private store: Store, private meta: Meta,
              private titleService: Title,
              private translate: TranslateService) { }

  ngOnInit() {
    this.store.dispatch(new ChangeNavState('-'));
    this.titleService.setTitle('VIP CPA | ' + this.translate.get('SITEMAP'));
    this.meta.addTag({
      name: 'terms',
      content: 'Terms & Conditions at VIP CPA'
    });
  }

}
