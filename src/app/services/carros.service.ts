import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carro } from '../models/carro.model';

@Injectable({
  providedIn: 'root'
})
export class CarrosService {

  urlApi = "http://localhost:3000/carros/";

  constructor(private httpClient: HttpClient) { }

  get listarCarros(): Observable<Carro[]> {
    return this.httpClient.get<Carro[]>(this.urlApi);
  }

  getCarAtList(id: number): Observable<Carro> {
    return this.httpClient.get<Carro>(this.urlApi + id);
  }

  addNewCar(carro: Carro): void {
    this.httpClient.post<Carro>(this.urlApi, carro);
  }

  updateCar(carro: Carro): Observable<any> {
    return this.httpClient.put<Carro>(this.urlApi + carro.id, carro);
  }

  removeCar(carro: Carro): Observable<any> {
    return this.httpClient.delete<any>(this.urlApi + carro.id);
  }

}
