import { Component, ElementRef, ViewChild } from '@angular/core';
import {  Router } from '@angular/router';

import { Cliente } from 'src/app/domain/cliente';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.scss']
})
export class CrearClienteComponent {

  cliente: Cliente = new Cliente

  constructor(private clienteService : ClientesService, private router: Router){
      let params = this.router.getCurrentNavigation()?.extras.queryParams
      if(params){
        console.log(params)
        this.cliente = params['clienteToEdit']
      }


  }

  // validacion de campos cedula y telefono
  @ViewChild('cedulaInput', {static: true})
  cedulaInput!: ElementRef

  @ViewChild('telefonoInput', {static: true})
  telefonoInput!: ElementRef

  // funciones de validacion

  validarCedula(){
    const cedulaValue = this.cliente.cedula
    this.cliente.cedula = cedulaValue.replace(/\D/g,'').slice(0, 10)
  }

  validarTelefono(){
    const telefonoValue = this.cliente.telefono
    this.cliente.telefono = telefonoValue.replace(/\D/g,'')
  }

  save(){
    console.log(this.cliente)
    this.clienteService.save(this.cliente).subscribe(data =>{
      console.log("resultado WS save", data)
      alert(data.mensaje + ", Codigo: "+data.codigo)
      this.router.navigate(["pages/clientList"])
    })
    this.cliente = new Cliente
    
  }

}
