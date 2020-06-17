import { DatosService } from './../services/datos.service';
import { TaquillasComponent } from './taquillas/taquillas.component';
import { BocaoComponent } from '../tab1/bocao/bocao.component';

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
 
})
export class Tab1Page {

  peliculaSeleccionada:any;
  horaSeleccionada:any;
  taquilla:any;
  titulos: any[]=['Avengers End-Game','Avengers End-Game','Avengers End-Game'];
  hora: any[]=['4:00 P.M. - 7:00 P.M.','4:00 P.M. - 7:00 P.M.','4:00 P.M. - 7:00 P.M.'];
  pelicula:any;
  boletas:'src/assets/icon/008-popcorn.png';
  constructor(private router:Router, private builder:FormBuilder, private modalCtrl:ModalController, private service:DatosService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    //this.pelicula=[this.titulos,this.hora];
    this.pelicula=[this.titulos,this.hora];
    this.taquilla=[this.peliculaSeleccionada,this.horaSeleccionada];
    
    

  }
   async bocao() {
      const myModal = await this.modalCtrl.create({
        component: BocaoComponent,
        cssClass: 'bocao'
      });
      return await myModal.present();
    }
    
    async taquillas() {
      const myModal = await this.modalCtrl.create({
        component: TaquillasComponent,
        cssClass: 'taquillas',
      });
      return await myModal.present();
    }
}
