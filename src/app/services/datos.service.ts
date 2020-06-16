import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  boleta={
    titulo:'',
    hora:''
  }
  usuario:any;
  orden:any;
  compras:any;
  itemRef:any;
  object:any;
  var:any;
  constructor(private auth:AngularFireAuth, private db:AngularFireDatabase) { }

  setkeyEliminar(key){
    this.var=key;
  }
  getKeyEliminar(){
    return this.var;
  }

  setListaFirebase(lista){
    this.var=lista;
  }
  getListFirebase(){
    return this.var;
  }
  setCompras(compras){
    this.compras=compras;

  }
  getCompras(){
    return this.compras;
  }

  setUsuario(_usuario){
    this.usuario=_usuario;
  }
  getUsuario(){
    return this.usuario
  }

  login(user){
  return new Promise<any>((confirmado, denegado) => {
    this.auth.auth.signInWithEmailAndPassword(user.email, user.clave)
      .then(
        respuesta => confirmado(respuesta),
        error => denegado(error))

        this.setUsuario(this.auth.auth.currentUser.uid);
  })
}

  setBoleta(_titulo,_hora){
    this.boleta={
      titulo:_titulo,
      hora:_hora}
  }
  getBoleta(){
    return this.boleta
  }

  setOrden(_orden){
    this.orden=_orden;
  }

  getOrden(){
    return this.orden;
  }
}
