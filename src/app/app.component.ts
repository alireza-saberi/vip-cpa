import { Component, Inject } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ProblemComponent} from './shared/components/dialogs/problem/problem.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-vip-cpa';
  sideNav: boolean;

  constructor(private translate: TranslateService, public dialog: MatDialog) {
    const browserLang = translate.getBrowserLang();
    if (browserLang === 'en' || browserLang === 'fr' || browserLang === 'zh') {
      translate.setDefaultLang(translate.getBrowserLang());
    } else {
      translate.setDefaultLang('en');
    }
    this.openDialog();
  }

  openSideNav($event) {
    if (!this.sideNav) {
      if ($event) {
        this.sideNav = true;
      }
    }
  }

  closeSideNav($event) {
    if (this.sideNav) {
      if ($event) {
        this.sideNav = false;
      }
    }

  }


  openDialog(): void {
    const dialogRef = this.dialog.open(ProblemComponent, {
      // width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
