import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import { AppState , ChangeNavState } from '../../../../core/states/app.state';
import {MatMenuTrigger} from '@angular/material';
import {FocusMonitor} from '@angular/cdk/a11y';

@Component({
  selector: 'app-navigator-header',
  templateUrl: './navigator-header.component.html',
  styleUrls: ['./navigator-header.component.scss'],
  animations: [ trigger('hovering', [
    state('*', style({
      color: '#f7a61b',
      left: 'calc(50% - 12px)'
    })),
    state('void', style({
      color: 'white',
      left: '-10px'
    })),
    transition('*<=>void', [ animate('500ms') ])
  ])]
})
export class NavigatorHeaderComponent implements OnInit {
  isHome: boolean;
  isService: boolean;
  isAboutus: boolean;
  isContact: boolean;
  isPortal: boolean;
  @Select(AppState.activeNav) navState$: Observable<string>;
  @ViewChild(MatMenuTrigger, { static: false}) trigger: MatMenuTrigger;
  constructor(private store: Store) { }

  ngOnInit() {
    this.isHome = true;
    this.navState$.subscribe( navState => {
      if (navState === 'home') {
        this.isHome = true;
        this.isService = false;
        this.isContact = false;
        this.isAboutus = false;
        this.isPortal = false;
      } else if (navState === 'client') {
        this.isHome = false;
        this.isService = false;
        this.isContact = false;
        this.isAboutus = false;
        this.isPortal = true;
      } else if (navState === 'service') {
        this.isHome = false;
        this.isService = true;
        this.isContact = false;
        this.isAboutus = false;
      } else if (navState === 'contact') {
        this.isHome = false;
        this.isService = false;
        this.isContact = true;
        this.isAboutus = false;
      } else if (navState === 'aboutus') {
        this.isHome = false;
        this.isService = false;
        this.isContact = false;
        this.isAboutus = true;
      } else {
        this.isHome = false;
        this.isService = false;
        this.isContact = false;
        this.isAboutus = false;
      }
    });
  }
  openMenu($event) {
    this.trigger.openMenu();
  }
}
