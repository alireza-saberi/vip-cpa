import { Component, OnInit } from '@angular/core';
import {ChangeNavState} from '../../core/states/app.state';
import {Store} from '@ngxs/store';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Meta, Title} from '@angular/platform-browser';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  lat: number = 45.499355;
  lng: number = -73.574097;

  vipAddress = 'https://www.google.ca/maps/place/1410+Rue+Stanley+%23405,+Montr%C3%A9al,+QC+H3A+2W6/@45.4993508,-73.5762726,17z' +
    '/data=!3m1!4b1!4m5!3m4!1s0x4cc91a422ab4961b:0xe9756e733fae8dce!8m2!3d45.4993508!4d-73.5740839';
  constructor(private store: Store,
              private meta: Meta,
              private titleService: Title,
              private translate: TranslateService) { }

  ngOnInit() {
    this.store.dispatch(new ChangeNavState('contact'));
    this.titleService.setTitle('VIP CPA | ' + this.translate.get('CONTACT_US'));
    this.meta.addTag({
      name: 'contact-us',
      content: 'different method to contact VIP CPA'
    });
  }
}
