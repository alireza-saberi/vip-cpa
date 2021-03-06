import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { OurServicesComponent } from './our-services/our-services.component';
import {SharedModule} from '../shared/shared.module';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import {MatIconModule} from '@angular/material';
import { AboutUsComponent } from './about-us/about-us.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { SiteMapComponent } from './site-map/site-map.component';
import {AgmCoreModule} from '@agm/core';
import { TermsComponent } from './terms/terms.component';
import { ServiceOneComponent } from './our-services/service-one/service-one.component';
import { ServiceTwoComponent } from './our-services/service-two/service-two.component';
import { ServiceThreeComponent } from './our-services/service-three/service-three.component';
import {RouterModule} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';
import { ServiceFourComponent } from './our-services/service-four/service-four.component';
import { ServiceFiveComponent } from './our-services/service-five/service-five.component';
import { RebrandingComponent } from './rebranding/rebranding.component';
import { ClientPortalComponent } from './client-portal/client-portal.component';
// import { AngularFirestoreModule } from '@angular/fire/firestore/firestore.module';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  observer: true,
  direction: 'horizontal',
  threshold: 50,
  spaceBetween: 5,
  slidesPerView: 1,
  centeredSlides: true
};

@NgModule({
  declarations: [
    HomeComponent,
    ContactUsComponent,
    OurServicesComponent,
    AboutUsComponent,
    PrivacyPolicyComponent,
    SiteMapComponent,
    TermsComponent,
    ServiceOneComponent,
    ServiceTwoComponent,
    ServiceThreeComponent,
    ServiceFourComponent,
    ServiceFiveComponent,
    RebrandingComponent,
    ClientPortalComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    SwiperModule,
    MatIconModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBp2XGtO263zgv4wHKFEqhNpPfT4p0XWWQ'
    }),
    RouterModule,
    TranslateModule,
    // AngularFirestoreModule, // imports firebase/firestore, only needed for database features
  ],
  exports: [
    HomeComponent,
    ContactUsComponent,
    OurServicesComponent,
    TermsComponent,
    PrivacyPolicyComponent,
    ServiceOneComponent,
    ServiceTwoComponent,
    ServiceThreeComponent,
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ]
})
export class ModulesModule { }
