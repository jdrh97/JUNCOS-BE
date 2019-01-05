import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ParticipantesComponent } from './components/participantes/participantes.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { MedalleroComponent } from './components/medallero/medallero.component';
import { LoginComponent } from './login/login.component';
import { UniversidadesComponent } from './components/universidades/universidades.component';
import { LugaresComponent } from './components/lugares/lugares.component';

const routes: Routes = [
  //{ path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: MainPageComponent},
  { path: 'mainPage', component: MainPageComponent},
  { path: 'universidades' ,component: UniversidadesComponent},
  { path: 'participantes', component: ParticipantesComponent},
  { path: 'eventos', component: EventosComponent},
  { path: 'medallero', component: MedalleroComponent},
  { path: 'lugares', component: LugaresComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
export const routingComponents = [MainPageComponent, UniversidadesComponent,
ParticipantesComponent,EventosComponent, MedalleroComponent,LoginComponent,LugaresComponent] 
//cada vez que se agrega un component o una pagina con "cg g c <nombre> " hay que meterlo en este array