import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { NgxsModule } from '@ngxs/store';
import { AgmCoreModule } from '@agm/core';
import { AngularFireModule } from '@angular/fire';

import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { ModulesModule } from './modules/modules.module';
import { MatIconModule } from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';


import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import { HomeComponent } from './modules/home/home.component';
import { OurServicesComponent } from './modules/our-services/our-services.component';
import { ContactUsComponent } from './modules/contact-us/contact-us.component';
import { AppState } from './core/states/app.state';
import { AboutUsComponent } from './modules/about-us/about-us.component';
import { PrivacyPolicyComponent } from './modules/privacy-policy/privacy-policy.component';
import { SiteMapComponent } from './modules/site-map/site-map.component';
import { TermsComponent } from './modules/terms/terms.component';
import {ServiceOneComponent} from './modules/our-services/service-one/service-one.component';
import {ServiceTwoComponent} from './modules/our-services/service-two/service-two.component';
import {ServiceThreeComponent} from './modules/our-services/service-three/service-three.component';
import {ServiceFourComponent} from './modules/our-services/service-four/service-four.component';
import {ServiceFiveComponent} from './modules/our-services/service-five/service-five.component';
import {APIKeys} from './configs/keys';
import {AngularFireAnalyticsModule} from '@angular/fire/analytics';

const routesArrayOfObject: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'our-services',
    component: OurServicesComponent,
    children: [
      {
        path: 'personal-tax',
        component: ServiceOneComponent
      },
      {
        path: 'corporate-tax',
        component: ServiceTwoComponent
      },
      {
        path: 'bookkeeping',
        component: ServiceThreeComponent
      },
      {
        path: 'payroll',
        component: ServiceFourComponent
      },
      {
        path: 'financial-statements',
        component: ServiceFiveComponent
      },
      {
        path: '**',
        redirectTo: 'personal-tax'
      }
    ]
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'contact-us',
    component: ContactUsComponent
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent
  },
  {
    path: 'terms-and-conditions',
    component: TermsComponent
  },
  {
    path: 'site-map',
    component: SiteMapComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
  ];


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routesArrayOfObject),
    NgxsModule.forRoot([AppState]),
    AngularFireModule.initializeApp(APIKeys.firebaseConfig),
    AngularFireAnalyticsModule,
    SharedModule,
    CoreModule,
    ModulesModule,
    MatIconModule,
    AgmCoreModule.forRoot(APIKeys.googleMapConfig),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
