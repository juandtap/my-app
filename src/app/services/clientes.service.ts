import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../domain/cliente';
import { Observable } from 'rxjs';

const urlbase = "http://localhost:8080/demo/webservice/parking/"

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  

  constructor(private http: HttpClient) {

  }


  save(cliente: Cliente)  {
    return this.http.post<any>(urlbase, cliente)
  }

  getAll(){
      return this.http.get<Cliente[]>(urlbase+"clientes")
  }

}
