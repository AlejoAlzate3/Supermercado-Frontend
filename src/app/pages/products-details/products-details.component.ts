import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {

  products : any = [];
  productID: any = [];

  constructor(public login: LoginService, private route: ActivatedRoute, private productoService: ProductService) { }

  ngOnInit(): void {
    this.productID = this.route.snapshot.paramMap.get('id');
    this.products = this.productoService.getProductById(this.productID).subscribe(
      product => {
        this.products = product;
        console.log(this.products);
      });
  }

  public logout(){
    this.login.logout();
    window.location.reload();
  }
}
