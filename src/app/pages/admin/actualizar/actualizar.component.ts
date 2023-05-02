import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent implements OnInit {

  products : any = [];
  productID: any = [];

  constructor(private route: ActivatedRoute, private productoService: ProductService, private router: Router) { }


  ngOnInit(): void {
    this.productID = this.route.snapshot.paramMap.get('id');
    this.products = this.productoService.getProductById(this.productID).subscribe(
      product => {
        this.products = product;
        console.log(this.products);
      });
  }

  public updateProduct(){
    this.productoService.updateProduct(this.products).subscribe(
      product => {
        this.products = product;
        Swal.fire('Producto actualizado', `Producto ${this.products.nombre} actualizado con éxito`, 'success')
        .then(
          () => {
            this.router.navigate(['/admin/products-admin']);
          });
      },
      (error) => {
        Swal.fire('Error', 'Error al actualizar el producto', 'error');
        console.log(error);
      }
    );
  }
}
