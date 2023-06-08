import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Product } from '../domain/product';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private dbPath = "/productos"
  productRef: AngularFirestoreCollection< Product  >

  constructor(private db: AngularFirestore) {
    this.productRef = this.db.collection(this.dbPath)
  }

  create(product: Product) : any{
    console.log("producto a agregar : "+product)
    product.uid = this.db.createId()
    return this.productRef.doc(product.uid).set({... product})
  }

  getAll(){
    return this.productRef.valueChanges()
  }

  update(id: string, product: Product) : Promise<void>{
    return this.productRef.doc(product.uid).update(product)
  }

  delete(id: string): Promise<void>{
    return this.productRef.doc(id).delete()
  }


  
}
