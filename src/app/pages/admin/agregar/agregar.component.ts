import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  product = {
    nombre: '',
    precio: 0,
    descripcion: '',
    stock: 0,
    promocion: ''
  }

  constructor(private productService: ProductService, private router:Router) { }

  addProduct(){
    if(this.product.nombre == '' || this.product.precio == 0 || this.product.descripcion == '' || this.product.stock == 0 || this.product.promocion == ''){
      Swal.fire('Error', 'Todos los campos son obligatorios', 'error');
      return;
    }

    this.productService.saveProduct(this.product).subscribe(
      (response: any) => {
        console.log(response);
        this.product = {
          nombre: '',
          precio: 0,
          descripcion: '',
          stock: 0,
          promocion: ''
        }
        Swal.fire('Éxito', 'Producto agregado correctamente', 'success');
        this.router.navigate(['/admin/products-admin']);
      },
      () => {
        console.log("Ocurrió un error al agregar el producto");
        Swal.fire('Error', 'Ocurrió un error al agregar el producto', 'error');
      }
    )
  }
}
