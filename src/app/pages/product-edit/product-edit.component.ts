import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Product } from 'src/app/domain/product';
import { ProductoService } from 'src/app/services/producto.service';
import { ContactListComponent } from '../contact-list/contact-list.component';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent {
  product : Product = new Product

  constructor(private productService: ProductoService, private router: Router){
    let params = this.router.getCurrentNavigation()?.extras.queryParams
    if(params){
      console.log(params)
      this.product = params['productToEdit']
    }
  }

  update(product : Product){
    this.productService.update(product.uid, product)
    this.router.navigate(['pages/productlist'])
  }
}
