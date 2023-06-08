import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Contact } from 'src/app/domain/contact';
import { Product } from 'src/app/domain/product';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  listProductFire: any

  constructor(private productService: ProductoService, private router :Router){
    this.listProductFire = this.productService.getAll()
  }

  edit(product: Product){
      console.log("editar "+product)
      let params: NavigationExtras = {
        queryParams:{
          productToEdit: product,
        }
      }

      this.router.navigate(['pages/productedit'], params)
  }

  delete(product: Product){
    console.log("producto a eliminar "+product.code)
    this.productService.delete(product.uid)
  }
}
