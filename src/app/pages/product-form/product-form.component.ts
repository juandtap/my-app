import { Component } from '@angular/core';
import { Product } from 'src/app/domain/product';
import { ProductEditComponent } from '../product-edit/product-edit.component';
import { ProductoService } from 'src/app/services/producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent {
  product: Product = new Product

  constructor(private pruductService: ProductoService, private router: Router){
    let params = this.router.getCurrentNavigation()?.extras.queryParams
    if(params){
      console.log(params)
      this.product = params['product']
    }
  }

  save(){
    console.log(this.product)
    this.pruductService.create(this.product)
    this.router.navigate(["pages/productlist"])
  }
}
