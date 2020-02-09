import { Component, OnInit } from '@angular/core';
import {ChangeNavState} from '../../core/states/app.state';
import {Store} from '@ngxs/store';
import {Meta, Title} from '@angular/platform-browser';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor(private store: Store,
              private meta: Meta,
              private titleService: Title,
              private translate: TranslateService ) { }

  ngOnInit() {
    this.store.dispatch(new ChangeNavState('aboutus'));
    this.titleService.setTitle('VIP CPA | ' +  this.translate.get('ABOUT_US'));
    this.meta.addTag({
      name: 'about-us',
      content: 'about VIP CPA'
    });
  }

}
