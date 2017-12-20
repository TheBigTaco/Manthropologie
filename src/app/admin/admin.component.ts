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
  public type: string;
  public color: string;
  public currentImage: string;
  public images: string[] = [];
  public products;
  public editing: boolean = false;
  public newPrice: number;
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

  submitEdit() {
    this.editing = false;
    this.manthro.updateProduct(this.selectedProductId, this.newPrice);
  }

  beginDeleteProduct(product) {
    if(confirm("You sure you want to delete this product from inventory?")) {
      this.manthro.deleteProduct(product);
    }
  }

  addImage() {
    this.images.push(this.currentImage);
    this.currentImage = "";
  }

  addProductClicked() {
    if(this.currentImage != "") {
      this.addImage();
    }
    let newProduct: Product = new Product(this.title, this.price, this.type, this.color, this.images);
    this.title = "";
    this.price = null;
    this.type = "";
    this.color = "";
    this.currentImage = "";
    this.manthro.addProduct(newProduct);
  }

}
