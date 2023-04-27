import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-home',
  templateUrl: './footer-home.component.html',
  styleUrls: ['./footer-home.component.css']
})
export class FooterHomeComponent {

  anio: number;

  constructor() {
    this.anio = new Date().getFullYear();
  }

}
