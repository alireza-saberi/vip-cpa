import { Component, OnInit } from '@angular/core';
import {ChangeNavState} from '../../core/states/app.state';
import {Store} from '@ngxs/store';
import {Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss']
})
export class OurServicesComponent implements OnInit {

  constructor(private store: Store,
              private router: Router) { }

  ngOnInit() {
    this.store.dispatch(new ChangeNavState('service'));
  }

  routTo(r: string): void {
    this.router.navigate([r]);
  }

}
