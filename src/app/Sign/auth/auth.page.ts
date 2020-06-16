import { DatosService } from './../../services/datos.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  form:FormGroup;
  constructor(private router:Router, private builder:FormBuilder, private auth:AngularFireAuth, private service:DatosService) { }

  ngOnInit() {
    this.form=this.builder.group({
      email:['',[Validators.required,Validators.email]],
      clave:['',[Validators.required,Validators.minLength(6),Validators.maxLength(16)]]
    })
  }
  async iniciarSesion(user){
    try {
     this.service.login(user);
     alert("Has iniciado sesion correctamente.");
     this.router.navigate(['compras']);
      

    } catch (error) {
      alert("Ocurrio un error al iniciar sesion");
      console.error(error);
    }
    
    
    }
  

  
  registrarse(){
    this.router.navigate(['/regisro']);
  }
}
