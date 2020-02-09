import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { BlogComponent } from './blog/blog.component';
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
    BlogComponent,
    AboutUsComponent,
    PrivacyPolicyComponent,
    SiteMapComponent,
    TermsComponent,
    ServiceOneComponent,
    ServiceTwoComponent,
    ServiceThreeComponent,
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
    TranslateModule
  ],
  exports: [
    HomeComponent,
    ContactUsComponent,
    OurServicesComponent,
    BlogComponent,
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
