import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-products-user',
  templateUrl: './products-user.component.html',
  styleUrls: ['./products-user.component.css']
})
export class ProductsUserComponent {

  products : any = [];

  constructor( private productService : ProductService) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(
      (data: any) => {
        this.products = data;
        console.log(this.products);
      },
      () => {
        console.log('Error al listar los productos');
        Swal.fire('Error', 'Ocurrió un error al listar los productos', 'error');
      });
  }

  onClick(product: any){
    this.productService.getProductById(product.id).subscribe(
      (data: any) => {
        this.products = product;
      });
  }
}
