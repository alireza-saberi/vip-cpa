import {Component, Inject, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {AngularFireAnalytics} from '@angular/fire/analytics';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  year: number;
  cpaCanadaDomain = 'https://www.cpacanada.ca/';

  constructor(private translate: TranslateService,
              private analytics: AngularFireAnalytics
  ) { }

  ngOnInit() {
    const date = new Date();
    this.year = date.getFullYear();
  }

  useLanguage(language: string) {
    this.translate.use(language);
    this.analytics.logEvent('UPDATING_LANG_TO' + language.toUpperCase() + '_event');
  }

  goToSocial(social: string) {
    this.analytics.logEvent('GOTO_' + social.toUpperCase() + '_event');
  }
}
