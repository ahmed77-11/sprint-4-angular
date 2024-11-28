import { Injectable } from '@angular/core';
import {Moto} from "../../model/moto.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";


const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
}

@Injectable({
  providedIn: 'root'
})
export class MotoService {

  apiURL: string = 'http://localhost:8081/motos/api/all';
  motos! : Moto[];

  constructor(private http:HttpClient) { }

  listeMotos(): Observable<Moto[]>{
    return this.http.get<Moto[]>(this.apiURL,httpOptions);
  }
}
