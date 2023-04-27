import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products : any = [];

  constructor( private productService : ProductService, private router: Router) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(
      (data: any) => {
        this.products = data;
      },
      () => {
        console.log();
        Swal.fire('Error', 'Ocurrió un error al listar los productos', 'error');
      });
  }

  onClick(product: any){
    this.products = product;
    console.log(product);
  }
}
