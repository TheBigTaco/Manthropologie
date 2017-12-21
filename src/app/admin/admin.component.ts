import { Component, OnInit } from '@angular/core';
import { Manthro } from './../manthro.service';
import { Product } from './../product.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  providers: [Manthro]
})
export class AdminComponent implements OnInit {
  public category;
  public title: string;
  public price: number;
  public type: string = "/clothing";
  public description: string;
  public image1: string;
  public image2: string;
  public image3: string;
  public images: string[] = [];
  public products;
  public editing: boolean = false;
  // public newTitle: string;
  // public newPrice: number;
  // public newDescription: string;
  public selectedProductId: string;
  constructor(private manthro: Manthro) {
    this.products = manthro.getProducts();
  }

  ngOnInit() {
    this.category = window.location;
  }

  editProduct(product) {
    if(this.editing) {
      this.editing = false;
      this.selectedProductId = null;
    } else {
      this.editing = true;
      this.selectedProductId = product.$key;
    }
  }

  submitEdit(title, price, description) {
    this.manthro.updateProduct(this.selectedProductId, title, price, description);
    this.selectedProductId = null;
  }

  beginDeleteProduct(product) {
    if(confirm("You sure you want to delete this product from inventory?")) {
      this.manthro.deleteProduct(product);
    }
  }

  addProductClicked() {
    this.images.push(this.image1);
    this.images.push(this.image2);
    this.images.push(this.image3);
    this.image1 = "";
    this.image2 = "";
    this.image3 = "";

    let newProduct: Product = new Product(this.title, this.price, this.type, this.description, this.images);
    this.title = "";
    this.price = null;
    this.type = "/clothing";
    this.description = "";
    this.images = [];
    this.manthro.addProduct(newProduct);
  }

}
