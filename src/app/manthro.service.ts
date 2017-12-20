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
    return this.database.object('product/' + productId);
  }

  updateProduct(updatedProduct: string, newTitle: string, newPrice: number, newDescription: string) {
    var productInDatabase = this.getProductById(updatedProduct);
    productInDatabase.update({
      title: newTitle,
      price: newPrice,
      description: newDescription
    })
  }

  deleteProduct(product) {
    var productInDatabase = this.getProductById(product.$key);
    productInDatabase.remove();
  }
}
