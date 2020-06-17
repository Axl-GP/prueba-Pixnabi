import { DatosService } from './../../services/datos.service';
import { Component, OnInit, Input } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-taquillas',
  templateUrl: './taquillas.component.html',
  styleUrls: ['./taquillas.component.scss'],
})
export class TaquillasComponent implements OnInit {

  cantidadTickets:any=[1,2,3,4,5,6,7,8,9];
  ordenes:any[];
  NoTickets:any;
  pago:Pago;
  compras:Pago[];
  tipo:any;
  precioPerTicket:any;
  ticketSolicitados:any;
  tipoPago=["Tarjeta", "Paypal", "Efectivo"];
  
  constructor(private service: DatosService, private ctrl: ModalController, private router:Router) {
    
    
   }

  ngOnInit() {
    
    this.ordenes=this.service.getOrden();

    
   }


   setMetodoPago(tipo){
    this.tipo=tipo.detail.value;
  }
   getMetodoPago(){
     return this.tipo;
   }
   
   setTickets(numero){
    this.NoTickets=numero.detail.value;
  }
  getTickets(){
    return this.NoTickets;
  }
  cerrarModal() {
    if (this.ctrl) {
      this.ctrl.dismiss().then(() => { this.ctrl = null; });
    }
  }
   calcularTickets(){
     this.precioPerTicket=500;
     this.ticketSolicitados=this.getTickets();
    return this.precioPerTicket*this.ticketSolicitados;
  }
  calcularPrecios(){
    let suma=0;
    for(let comida in this.ordenes){
      suma+=this.ordenes[comida].total
    }
    suma+=this.calcularTickets();
    return suma;
  }
  tramitarVenta(){
    this.pago= new Pago();
    this.pago.objeto.NoTickets=this.getTickets();
    this.pago.objeto.total=this.calcularPrecios();
    this.pago.objeto.comida=this.service.getOrden();
    this.pago.objeto.pagoid=Date.now();
    this.pago.objeto.tipo=this.getMetodoPago();
    this.compras.push(this.pago);
  }

  iniciarSesion(){
    this.cerrarModal();
    this.router.navigate(['/registro']);
    
  }

}
export class Pago{
  objeto:{
    NoTickets:number,
    comida:any,
    tipo:string,
    total:number,
    pagoid:number,
  }

  

}
