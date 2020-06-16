import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { DatosService } from './../../services/datos.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-cancelar',
  templateUrl: './cancelar.component.html',
  styleUrls: ['./cancelar.component.scss'],
})
export class CancelarComponent implements OnInit {

  cantidadTickets:any=[1,2,3,4,5,6,7,8,9];
  ordenes:any[];
  NoTickets:any;
  pago:Pago;
  compras:Pago[]=[];
  tipo:any;
  precioPerTicket:any;
  ticketSolicitados:any;
  tipoPago=["Tarjeta", "Paypal", "Efectivo"];
  constructor(private service: DatosService, private router:Router, private db:AngularFireDatabase, private ctrl:ModalController) {
    
}
  ngOnInit() {
    this.service.getKeyEliminar();

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
    
     
     
     cancelarVenta(){
       
       this.db.database.ref('usuarios/'+this.service.getUsuario()+'/compras/'+this.service.getKeyEliminar()).remove();
       this.volver();
      }
    
     
    
     volver(){
        if (this.ctrl) {
          this.ctrl.dismiss().then(() => { this.ctrl = null; });
        }
      
     }
     }
     export class Pago{
     
      NoTickets:number;
      comida:any;
      tipo:string;
      total:number;
      pagoid:number;
     
     
     }
     


