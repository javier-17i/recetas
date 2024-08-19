import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  comuna:string = "lo espejo";
  edad: number = 25;
  nombre:string = "javier"
  arreglopersona: any = [
  {
    nombre: 'jose',
    apellido: 'muñoz',
    edad: 24,
  
  }
  ]
  
  datosP: any = {
    id: 1,
    dato: 'programacion'
  }

  constructor(private router:Router) { }

  ngOnInit() {
  }
  irPagina(){
    //crear el codigo dque quiera de la logica
    this.router.navigate(['/agregar']);

  }

}
