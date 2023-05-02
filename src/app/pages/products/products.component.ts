import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products : any = [];

  constructor( private productService : ProductService) { }

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
    this.productService.getProductById(product.id).subscribe(
      (data: any) => {
        this.products = product;
      });
  }
}
