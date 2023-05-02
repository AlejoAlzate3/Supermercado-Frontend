import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) {}

  //Listar todos los productos
  public getAllProducts(){
    return this.http.get(`${baseUrl}/api/auth/products`);
  }

  //Listar un producto por id
  public getProductById(id: number){
    return this.http.get(`${baseUrl}/api/auth/products/${id}`);
  }

  //Guardar un producto
  public saveProduct(product: any){
    return this.http.post(`${baseUrl}/api/auth/guardar`, product);
  }

  //Actualizar un producto
  public updateProduct(product: any){
    return this.http.put(`${baseUrl}/api/auth/actualizar`, product);
  }

  //Eliminar un producto
  public deleteProduct(id: any){
    return this.http.delete(`${baseUrl}/api/auth/eliminar/${id}`);
  }
}
