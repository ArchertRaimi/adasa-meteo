import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeteoDataComponent } from './pages/meteo-data/meteo-data.component';

const routes: Routes = [
  {path: '', component: MeteoDataComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeteoRoutingModule { }
