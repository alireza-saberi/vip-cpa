import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Store} from '@ngxs/store';
import {ChangeNavState} from '../../../core/states/app.state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output('sidenav-open') burgerClick: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private store: Store) { }

  ngOnInit() {
  }

  openSideNav($event) {
    this.burgerClick.emit(true);
  }
}
