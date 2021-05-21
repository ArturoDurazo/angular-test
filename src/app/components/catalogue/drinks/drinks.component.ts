import { Component, OnInit } from '@angular/core';
import { ProductsService } from "../../../Services/products.service";

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.css']
})
export class DrinksComponent implements OnInit {

  constructor(public productsService: ProductsService) { }

  ngOnInit(): void {
    //console.log(this.productsService.getProducts());
    this.getDrinks();
  }

  getDrinks(){
    this.productsService.getProducts().subscribe(
      res => {
        this.productsService.products = res.filter(res => res.category == 2);
        console.log(this.productsService.products);
      },
      err => {
        console.log(err);
      }
    )
  }

}
