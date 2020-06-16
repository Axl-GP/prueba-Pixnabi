import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { DatosService } from './../../services/datos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.page.html',
  styleUrls: ['./compras.page.scss'],
})
export class ComprasPage implements OnInit {

  cantidadTickets:any=[1,2,3,4,5,6,7,8,9];
  ordenes:any[];
  NoTickets:any;
  pago:Pago;
  compras:Pago[]=[];
  tipo:any;
  precioPerTicket:any;
  ticketSolicitados:any;
  tipoPago=["Tarjeta", "Paypal", "Efectivo"];
  constructor(private service: DatosService, private router:Router, private db:AngularFireDatabase) {
    
}

ngOnInit() {
 console.log(this.ordenes);
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
    this.pago.NoTickets=this.getTickets();
    this.pago.total=this.calcularPrecios();
    if(this.service.getOrden()!=undefined){
      this.pago.comida=this.service.getOrden();
    }
    else{
      this.pago.comida=[];
    }
    
    this.pago.pagoid=Date.now();
    this.pago.tipo=this.getMetodoPago();
    this.compras.push(this.pago);
    this.service.setCompras(this.compras);

    this.db.database.ref('usuarios/'+this.service.getUsuario()+'/compras/'+this.pago.pagoid).set({
      titulo:'Avengers End-Game',
      horario:'4:00 P.M - 7:00 P.M.',
      pagoid:this.pago.pagoid,
      comida:this.pago.comida,
      ticketsComprados:this.pago.NoTickets,
      tipoPago:this.pago.tipo,
      total:this.pago.total 
    })
      
this.router.navigate(['tabs/tab2']);



}

iniciarSesion(){
 this.router.navigate(['/registro']);
 
}
volver(){
  this.router.navigate(['tabs/tab1']);
}
}
export class Pago{

 NoTickets:number;
 comida:any;
 tipo:string;
 total:number;
 pagoid:number;


}
