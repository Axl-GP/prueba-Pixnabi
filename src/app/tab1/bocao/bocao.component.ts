import { DatosService } from './../../services/datos.service';
import { Tab1Page } from './../tab1.page';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-bocao',
  templateUrl: './bocao.component.html',
  styleUrls: ['./bocao.component.scss'],
})
export class BocaoComponent implements OnInit {
 
  ordenes:picadera[]=[];
  cantidad:any;
  titulo:any;
  ordenID:any;
  pick=new picadera;
  form:FormGroup;

  constructor(private builder:FormBuilder, private service:DatosService, private ctrl:ModalController) { }

  ngOnInit() {
    console.log(this.ordenes);
   
  }

      capturarTitulo(titulo){
        //this.pick.titulo=titulo.detail.value;
        this.titulo=titulo.detail.value;
        console.log(this.titulo);

      }
      capturarCantidad(cantidad){
        //this.pick.cantidad=cantidad.detail.value;
        this.cantidad=cantidad.detail.value;
        console.log(this.cantidad);
      }
      getCantidad(){
        return this.cantidad;
      }
      getTitulo(){
        return this.titulo;
      }
      ordenid(){
        return this.ordenID=Date.now();
      }


  ordenComida(){

    
      switch (this.titulo){
        case "Hot dog":
          this.pick=new picadera;
          
          this.pick.titulo=this.getTitulo();
          this.pick.cantidad=this.getCantidad();
          this.pick.ordenid=this.ordenid();
          this.pick.precio=150.00;
          this.pick.picaderasid=1;
          this.setTotal(parseInt(this.pick.cantidad));
          this.ordenes.push(this.pick);
          break;
          
          
  
        case "Combo doble":
          this.pick=new picadera;
          this.pick.titulo=this.getTitulo();
          this.pick.cantidad=this.getCantidad();
          this.pick.ordenid=this.ordenid();
          this.pick.precio=300.00;
          this.pick.picaderasid=2;
          this.setTotal(parseInt(this.pick.cantidad));
          
          this.ordenes.push(this.pick);
          break;
          
          
        
        case "Nachos con queso":
          this.pick=new picadera;
          this.pick.titulo=this.getTitulo();
          this.pick.cantidad=this.getCantidad();
          this.pick.ordenid=this.ordenid();
          this.pick.precio=170.00;
          this.pick.picaderasid=3;
          this.setTotal(parseInt(this.pick.cantidad));
          
          this.ordenes.push(this.pick);
          break;
          
          
      }
      
      console.log(this.ordenes);

  }
  setTotal(cantidad){

    console.log(cantidad);
    this.pick.total= this.pick.precio*cantidad

  }

  eliminarOrden(index){

    console.log(index);
   this.ordenes.splice(index,1);
  }

  confirmarOrden(){
    this.service.setOrden(this.ordenes);
    console.log(this.service.getOrden());
    this.cerrarModal();
  }
  cerrarModal() {
    if (this.ctrl) {
      this.ctrl.dismiss().then(() => { this.ctrl = null; });
    }
  }

}
export class picadera{
  titulo:string;
  picaderasid:number;
  ordenid:number;
  cantidad:string;
  precio:number;
  total:number
}
