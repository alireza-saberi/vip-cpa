import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-moving-header',
  templateUrl: './moving-header.component.html',
  styleUrls: ['./moving-header.component.scss'],
  animations: [ trigger('boundInRight', [
    state('*', style({
      opacity: 1,
      transform: 'translate3d(0, 0, 0)'
    })),
    state('void', style({
      opacity: 0,
      transform: 'translate3d(3000px, 0, 0)'
    })),
    transition('*<=>void',[animate('1000ms')])
  ])]
})
export class MovingHeaderComponent implements OnInit {

  vipAddress = 'https://www.google.ca/maps/place/1410+Rue+Stanley+%23405,+Montr%C3%A9al,+QC+H3A+2W6/@45.4993508,-73.5762726,17z' +
    '/data=!3m1!4b1!4m5!3m4!1s0x4cc91a422ab4961b:0xe9756e733fae8dce!8m2!3d45.4993508!4d-73.5740839';

  constructor() { }

  ngOnInit() {
  }

}
