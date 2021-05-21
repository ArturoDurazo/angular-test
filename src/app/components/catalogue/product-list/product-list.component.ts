import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    //console.log(this.productsService.getProducts());
    this.getProducts();
  }

  getProducts(){
    this.productsService.getProducts().subscribe(
      res => {
        this.productsService.products = res;
        console.log(this.productsService.products);
      },
      err => {
        console.log(err);
      }
    )
  }

}
