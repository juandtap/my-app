import { Component } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

import { Cliente } from 'src/app/domain/cliente';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent {
   listaClientes:any

   constructor(private clienteService: ClientesService, private router: Router){
    this.listaClientes = this.clienteService.getAll()
   }

   ngOnInit() {
    this.listaClientes = this.clienteService.getAll();
  }

   editar(cliente : Cliente){
       console.log("Editar cliente: "+cliente.cedula)

       let params: NavigationExtras = {
        queryParams:{
          clienteToEdit : cliente
        }
       }

       this.router.navigate(['pages/clientForm'], params)
   }


   eliminar(cliente : Cliente){
      console.log("eliminar cliente")
      this.clienteService.delete(cliente).subscribe(
        () => console.log("cliente eliminado")
      )

      this.reloadPage()
   }

   reloadPage(){
    let currentUrl = this.router.url
    this.router.navigateByUrl("/", {skipLocationChange: true}).then(
      () =>{
        this.router.navigate([currentUrl])
      }
    )
   }
}
