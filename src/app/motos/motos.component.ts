import { Component } from '@angular/core';
import {Moto} from "../../model/moto.model";
import {MotoService} from "../services/moto.service";

@Component({
  selector: 'app-motos',
  templateUrl: './motos.component.html',
  styleUrl: './motos.component.css'
})
export class MotosComponent {
  motos! :Moto[];

  constructor(private motoService:MotoService) {
  }

  ngOnInit(): void {
    this.chargerProduits();
    console.log(this.motos)
  }

  chargerProduits(){
    this.motoService.listeMotos().subscribe(motos => {
      console.log(motos);
      this.motos = motos;
    });
  }

}
