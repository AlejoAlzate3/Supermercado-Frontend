import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {

  constructor(public login: LoginService) { }

  ngOnInit(): void {}

  public logout(){
    this.login.logout();
    window.location.reload();
  }

}
