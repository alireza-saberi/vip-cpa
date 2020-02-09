import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-bang',
  templateUrl: './bang.component.html',
  styleUrls: ['./bang.component.scss']
})
export class BangComponent implements OnInit {
  condNormal: boolean;
  condRainbow: boolean;
  iconColor: boolean;
  @Input('img-src') imgSrc: string;
  @Input('img-alt') imgAlt: string;
  @Input('route') route: string;
  @Input('more') more: boolean;
  constructor() { }

  ngOnInit() {
    this.condNormal = true;
    this.condRainbow = false;
    this.iconColor = false;
  }

  mouseOver($event) {
    this.condNormal = false;
    this.condRainbow = true;
    this.iconColor = true;
  }

  mouseOut($event) {
    this.condNormal = true;
    this.condRainbow = false;
    this.iconColor = false;
  }

}
