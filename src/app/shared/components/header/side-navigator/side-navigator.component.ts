import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Store} from '@ngxs/store';
import {ChangeNavState} from '../../../../core/states/app.state';

@Component({
  selector: 'app-side-navigator',
  templateUrl: './side-navigator.component.html',
  styleUrls: ['./side-navigator.component.scss']
})
export class SideNavigatorComponent implements OnInit {
  @Output('sidenav-close') burgerClick: EventEmitter<boolean> = new EventEmitter<boolean>();
  private close = true;

  constructor(private store: Store) { }

  ngOnInit() {
  }

  closeSideNav($event) {
    this.burgerClick.emit(true);
  }

  closeSideNavHome($event) {
    this.burgerClick.emit(true);
    this.store.dispatch(new ChangeNavState('home'));
  }
  closeSideNavService($event) {
    this.burgerClick.emit(true);
    this.store.dispatch(new ChangeNavState('service'));
  }
  closeSideNavContact($event) {
    this.burgerClick.emit(true);
    this.store.dispatch(new ChangeNavState('contact'));
  }

  toggleService($event) {
    this.close = !this.close;
  }
}
