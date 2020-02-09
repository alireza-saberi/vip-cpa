import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  year: number;
  cpaCanadaDomain = 'https://www.cpacanada.ca/';

  constructor(private translate: TranslateService) { }

  ngOnInit() {
    const date = new Date();
    this.year = date.getFullYear();
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }

}
