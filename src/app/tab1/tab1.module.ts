import { RegistroPage } from './../Sign/registro/registro.page';
import { TaquillasComponent } from './taquillas/taquillas.component';
import { BocaoComponent } from './bocao/bocao.component';
import { MaterialModule } from './../MaterialModule/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { DatosService } from './../services/datos.service';
//import { BocaoPage } from '../bocao/bocao.page';

import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { Tab1PageRoutingModule } from './tab1-routing.module';

@NgModule({
  
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    MaterialModule
    
    
  ],
  declarations: [Tab1Page,BocaoComponent, TaquillasComponent,RegistroPage]
})
export class Tab1PageModule {}
