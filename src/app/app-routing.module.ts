import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/secure.guard';
import {MotosComponent} from "./motos/motos.component";


const routes: Routes = [
  {path : "motos" , component : MotosComponent, canActivate:[AuthGuard], data : {roles:['ADMIN']}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
