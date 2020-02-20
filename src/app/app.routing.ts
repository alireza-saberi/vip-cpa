import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {HomeComponent} from './modules/home/home.component';
import {OurServicesComponent} from './modules/our-services/our-services.component';
import {ServiceOneComponent} from './modules/our-services/service-one/service-one.component';
import {ServiceTwoComponent} from './modules/our-services/service-two/service-two.component';
import {ServiceThreeComponent} from './modules/our-services/service-three/service-three.component';
import {ServiceFourComponent} from './modules/our-services/service-four/service-four.component';
import {ServiceFiveComponent} from './modules/our-services/service-five/service-five.component';
import {AboutUsComponent} from './modules/about-us/about-us.component';
import {ContactUsComponent} from './modules/contact-us/contact-us.component';
import {PrivacyPolicyComponent} from './modules/privacy-policy/privacy-policy.component';
import {TermsComponent} from './modules/terms/terms.component';
import {SiteMapComponent} from './modules/site-map/site-map.component';
import {RebrandingComponent} from './modules/rebranding/rebranding.component';
import {QuicklinkStrategy} from 'ngx-quicklink';

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
    path: 'ats-consulting',
    component: RebrandingComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

export const appRoutingModule = RouterModule.forRoot(routesArrayOfObject, {
  preloadingStrategy: QuicklinkStrategy
});
