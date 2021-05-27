import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetaillerComponent } from './screen/detailler/detailler.component';
import { HomeComponent } from './screen/home/home.component';
import { PaysComponent } from './screen/pays/pays.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'pays', component: PaysComponent },
  { path: 'detailler', component: DetaillerComponent },
  { path: '**', component: HomeComponent }, 
  {path : '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
