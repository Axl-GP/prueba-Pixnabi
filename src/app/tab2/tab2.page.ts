import { CancelarComponent } from './cancelar/cancelar.component';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { DatosService } from './../services/datos.service';
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  compras:any[]=[];
  itemRef:any;
  object:any;
  constructor(private service:DatosService,private router:Router, private db:AngularFireDatabase, private ctrl:ModalController) {
    

    
   }
   ngOnInit(): void {
     //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
     //Add 'implements OnInit' to the class.
     this.itemRef = this.db.object('usuarios/'+this.service.getUsuario()+'/compras/');
     this.itemRef.snapshotChanges().subscribe(action => {
     console.log(action.payload.val())
     let data = action.payload.val()
     this.object=[];
         
           for(let k in  data){
           console.log(k);
           data[k].key = k ;
           
           this.object.push(data[k])
         }
           
     });
   }

   async eliminarCompra(key){
    
      this.service.setkeyEliminar(key);
      const myModal = await this.ctrl.create({
        component: CancelarComponent,
        cssClass: 'taquillas',
      });
      return await myModal.present();
    
   }
  

    

}
