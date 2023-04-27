import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from '../../services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData = {
    "username": "",
    "password": ""
  }

  constructor(private snack:MatSnackBar, private loginService:LoginService, private router: Router) { }

  ngOnInit(): void {}

  formSubmit(){
    if(this.loginData.username.trim() == '' || this.loginData.password.trim() == null){
      this.snack.open('El usuario es requerido !! no puede estar vacio', '', {
        duration: 5000
      })
      return;
    }
    if(this.loginData.password.trim() == '' || this.loginData.password.trim() == null){
      this.snack.open('El password es requerido !! no puede estar vacio', '', {
        duration: 5000
      })
      return;
    }

    this.loginService.login(this.loginData).subscribe(
      {
        next: (data:any) => {
          this.loginService.loginUser(data.token);
          this.loginService.getCurrentUser().subscribe(
            {
              next: (user:any) => {
                this.loginService.setUser(user);

                if(this.loginService.getRole() == 'ADMIN'){
                  this.router.navigate(['/admin']);
                }else if(this.loginService.getRole() == 'USER'){
                  this.router.navigate(['/user']);
                } else {
                  this.loginService.logout();
                }
              },
              error: () => {
                console.log('Error al obtener el usuario');
                Swal.fire('Error','Error al obtener el usuario, vuelva a intentar!!', 'error');
              }
            }
          );
        },
      }
    );
  }
}
