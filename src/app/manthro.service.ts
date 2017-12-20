import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Product } from './product.model';

@Injectable()
export class Manthro {
  products: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.products = database.list('product');
  }

  getProducts() {
    return this.products;
  }

  addProduct(newProduct: Product) {
    this.products.push(newProduct);
  }

  getProductById(productId: string) {
    return this.database.object('/product/' + productId);
  }

  updateProduct(updatedProduct: string, newPrice: number) {
    var productInDatabase = this.getProductById(updatedProduct);
    productInDatabase.update({
      price: newPrice
    })
  }

  deleteProduct(product) {
    var productInDatabase = this.getProductById(product.$key);
    productInDatabase.remove();
  }
}
