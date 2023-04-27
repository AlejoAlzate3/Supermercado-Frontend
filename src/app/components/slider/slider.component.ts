import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {

  compras: any[] = [
    {
      imagen: '../../../assets/img/slider/banner1-svg.svg'
    },
    {
      imagen: '../../../assets/img/slider/banner2-svg.svg'
    },
    {
      imagen: '../../../assets/img/slider/banner3-svg.svg'
    },
    {
      imagen: '../../../assets/img/slider/banner4-svg.svg'
    }
  ];

  constructor(config: NgbCarouselConfig) {
    config.interval = 3000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = true;
    config.showNavigationIndicators = false;
  }

}
