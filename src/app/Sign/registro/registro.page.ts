import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { analytics } from 'firebase';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  form:FormGroup;
  constructor(private router:Router,private builder:FormBuilder, private db:AngularFireDatabase, private auth:AngularFireAuth) { }

  ngOnInit() {
    this.form=this.builder.group({
      nombreCompleto:['',[Validators.required,Validators.minLength(6),Validators.maxLength(30)]],
      email:['',[Validators.required,Validators.email]],
      clave:['',[Validators.required,Validators.minLength(6),Validators.maxLength(16)]]
    })
  }

  async registrarse(){
    const usuario= this.form.value.nombreCompleto;
    const email  = this.form.value.email;
    const clave  = this.form.value.clave;


    await this.auth.auth.createUserWithEmailAndPassword(email,clave)

    .then(()=>{

      this.auth.auth.onAuthStateChanged((usuarios)=>{

          usuarios.updateProfile({
            displayName:usuario
          });

          
      });
        const usuarioid= this.auth.auth.currentUser.uid;
        const sistemaid= Date.now();
        

        this.db.database.ref('/usuarios/'+usuarioid+'/').set({

          usuario:usuario,
          email:email,
          usuarioid:usuarioid,
          sistemaid:sistemaid, 
        })

        this.auth.auth.currentUser.sendEmailVerification();

        alert('form exitoso');

    this.router.navigate(['/auth']);
        
    })
    .catch((error) => {
      const errorCodes = error.code;
      switch (errorCodes) {
        case 'auth/invalid-email':
          alert('Correo incorrecto');
          break;
        case 'auth/email-already-in-use':
          alert('Correo en uso');
          break;
        case 'auth/operation-not-allowed':
          alert('Ha ocurrido un error al registrarse');
          break;
        case 'auth/weak-password':
          alert('Su clave es muy debil.');
          break;
      }
    });
   

   
  }

  iniciarSesion(){
    this.router.navigate(['/auth']);
  }
}
