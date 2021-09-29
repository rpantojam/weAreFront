import { Component, OnInit } from '@angular/core';
import { Products } from '../model/products';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  products: Products[] = [];

  constructor(private productsService: ProductsService) { 
   }

  ngOnInit(): void {
      this.loadProducts();
  }

  loadProducts(): void {
    this.productsService.list().subscribe(
        data => {
            this.products = data;
        },
            err => console.log(err)
        );
    }
}