import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {MatIconModule, MatMenuModule} from '@angular/material';

import { HeaderComponent } from './components/header/header.component';
import { MovingHeaderComponent } from './components/header/moving-header/moving-header.component';
import { NavigatorHeaderComponent } from './components/header/navigator-header/navigator-header.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HamburgerComponent } from './components/header/hamburger/hamburger.component';
import { SideNavigatorComponent } from './components/header/side-navigator/side-navigator.component';
import { FooterComponent } from './components/footer/footer.component';
import { BangComponent } from './components/bang/bang.component';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [
    HeaderComponent,
    MovingHeaderComponent,
    NavigatorHeaderComponent,
    HamburgerComponent,
    SideNavigatorComponent,
    FooterComponent,
    BangComponent,
    ScrollToTopComponent
    ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    TranslateModule,
    MatMenuModule,
  ],
  exports: [
    HeaderComponent,
    SideNavigatorComponent,
    FooterComponent,
    BangComponent,
    ScrollToTopComponent
  ]
})
export class SharedModule { }
