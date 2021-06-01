import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './core/layout/main-layout/main-layout.component';
import { HomePageComponent } from './core/pages/home-page/home-page.component';
import { NotFoundComponent } from './core/pages/not-found/not-found.component';

const routes: Routes = [

  {
    path: '',
    component: MainLayoutComponent,
    children: [ 
      {path: '', component: HomePageComponent},
      {path: 'meteo-data', loadChildren:() => import('./meteo/meteo.module').then(m => m.MeteoModule)}
    ]
  },
  { path: '**', component: NotFoundComponent}

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
