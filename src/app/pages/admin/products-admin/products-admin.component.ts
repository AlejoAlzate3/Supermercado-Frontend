import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-products-admin',
  templateUrl: './products-admin.component.html',
  styleUrls: ['./products-admin.component.css']
})
export class ProductsAdminComponent implements OnInit {

  products: any = [];

  constructor(private productService: ProductService) { }

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

  public deleteProduct(productID: any) {
    Swal.fire({
      title: '¿Está seguro?',
      text: 'El producto será eliminado',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'No, cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.productService.deleteProduct(productID).subscribe(
          (data) => {
            this.products = this.products.filter((producto: any) => producto.id !== productID);
            Swal.fire('Eliminado', 'El producto ha sido eliminado', 'success').then ( () => {
              window.location.reload();
            });
          },
          (error) => {
            Swal.fire('Error', 'Error al eliminar el producto', 'error');
            console.log(error);
          }
        );
      }
    })
  }

  onClick(product: any){
    this.productService.getProductById(product.id).subscribe(
      (data: any) => {
        this.products = product;
      });
  }
}
