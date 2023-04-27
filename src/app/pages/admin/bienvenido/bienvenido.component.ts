import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.css']
})
export class BienvenidoComponent implements OnInit{

  users: any = [];
  constructor(private serviceUser: UserService) { }

  ngOnInit(): void {
    this.serviceUser.getAllUser().subscribe(
      (data) => {
      this.users = data
    });
  }

}
