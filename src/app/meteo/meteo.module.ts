import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeteoRoutingModule } from './meteo-routing.module';
import { MeteoDataComponent } from './pages/meteo-data/meteo-data.component';


@NgModule({
  declarations: [
    MeteoDataComponent
  ],
  imports: [
    CommonModule,
    MeteoRoutingModule
  ]
})
export class MeteoModule { }
