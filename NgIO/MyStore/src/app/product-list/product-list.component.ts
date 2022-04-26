import { Component, OnInit } from '@angular/core';
import { Product, products } from '../products';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  share() {
    alert("Share button clicked!")
  }

  onNotify() {
    window.alert("Notify clicked!")
  }

  // constructor(private products: Product) { }

  // console.log(products);



  // console.log(products);

  // ngOnInit(): void {
  // }

}
