import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsModule } from '@ngxs/store';
import { AgmCoreModule } from '@agm/core';
import { AngularFireModule } from '@angular/fire';
// import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { ModulesModule } from './modules/modules.module';
import { MatIconModule } from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';

import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { AppState } from './core/states/app.state';
import {AngularFireAnalyticsModule} from '@angular/fire/analytics';
import {appRoutingModule} from './app.routing';
import {QuicklinkModule} from 'ngx-quicklink';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import {APIKeys} from './configs/keys';
import {AngularFirestoreModule} from '@angular/fire/firestore';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    QuicklinkModule,
    appRoutingModule,
    NgxsModule.forRoot([AppState]),
    AngularFireModule.initializeApp(APIKeys.firebaseConfig),
    AngularFireAnalyticsModule,
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    SharedModule,
    CoreModule,
    ModulesModule,
    MatIconModule,
    MatDialogModule,
    AgmCoreModule.forRoot({
      apiKey: APIKeys.googleMapConfig.apiKey
    }),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    MatMenuModule,
    ServiceWorkerModule.register('/ngsw-worker.js',
      { enabled: environment.production })
  ],
  // providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
};
