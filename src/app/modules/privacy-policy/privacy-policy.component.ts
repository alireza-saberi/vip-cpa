import { Component, OnInit } from '@angular/core';
import {Store} from '@ngxs/store';
import {ChangeNavState} from '../../core/states/app.state';
import {Meta, Title} from '@angular/platform-browser';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent implements OnInit {

  constructor(private store: Store, private meta: Meta,
              private titleService: Title,
              private translate: TranslateService) { }

  ngOnInit() {
    this.store.dispatch(new ChangeNavState('-'));
    this.titleService.setTitle('VIP CPA | ' + this.translate.get('PRIVACY_POLICY'));
    this.meta.addTag({
      name: 'privacy-policy',
      content: 'Privacy Policy at VIP CPA'
    });
  }

}
