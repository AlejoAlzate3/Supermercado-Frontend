import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  public login(loginData:any){
    return this.http.post(`${baseUrl}/api/auth/login`, loginData);
  }

  //Iniciamos sesion y establecemos el token en el localstorage
  public loginUser(token:any){
    localStorage.setItem('token', token);
  }

  //Establecemos el token en el localstorage
  public isLoggedIn(){
    let tokenStr = localStorage.getItem('token');
    if(tokenStr == undefined || tokenStr == '' || tokenStr == null){
      return false;
    }else{
      return true;
    }
  }

  //Cerramos sesion y eliminamos el token del localstorage
  public logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }

  //Obtenemos el token del localstorage
  public getToken(){
    return localStorage.getItem('token');
  }

  //Establecemos el usuario del localstorage
  public setUser(user: any){
    localStorage.setItem('user', JSON.stringify(user));
  }

  //Obtenemos el usuario del localstorage
  public getUser(){
    let userStr = localStorage.getItem('user');
    if(userStr !== null){
      return JSON.parse(userStr);
    }else{
      this.logout();
      return null;
    }
  }

  //Obtenemos el rol del usuario
  public getRole(){
    let user = this.getUser();
    return user.authorities[0].authority;
  }

  //Usuario actual
  public getCurrentUser(){
    return this.http.get(`${baseUrl}/api/auth/user`);
  }
}
