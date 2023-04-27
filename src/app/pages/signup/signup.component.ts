import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from '../../services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public user = {
    username: '',
    password: '',
    nombre: '',
    apellido: '',
    email: '',
    telefono: ''
  };

  constructor(private userService: UserService, private snack:MatSnackBar, private router: Router) {}

  ngOnInit(): void {}

  formSubmit(){
    if(this.user.username == '' || this.user.username == null){
      this.snack.open('El campo username es obligatorio', 'Aceptar', {
        duration: 5000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      });
      return;
    }
    this.userService.registrarUsuario(this.user).subscribe(
      {
        next: (data:any) => {
          Swal.fire('Usuario guardado', 'Usuario registrado con éxito en el sistema', 'success');
          this.router.navigate(['/login']);
        },
        error: () => {
          console.log('Error en el registro de usuario');
          this.snack.open('Ha ocurrido un error en el sistema', 'Aceptar', {
            duration: 5000,
          });
        }
      }
    );
  }

}
