import { Component, OnInit } from '@angular/core';
import { ProductsService } from "../../../Services/products.service";

@Component({
  selector: 'app-cakes',
  templateUrl: './cakes.component.html',
  styleUrls: ['./cakes.component.css']
})
export class CakesComponent implements OnInit {

  constructor(public productsService: ProductsService) { }

  ngOnInit(): void {
    //console.log(this.productsService.getProducts());
    this.getCakes();
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

  getCakes(){
    this.productsService.getProducts().subscribe(
      res => {
        this.productsService.products = res.filter(res => res.category == 1);
        console.log(this.productsService.products);
      },
      err => {
        console.log(err);
      }
    )
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

  getSpecialties(){
    this.productsService.getProducts().subscribe(
      res => {
        this.productsService.products = res.filter(res => res.category == 3);
        console.log(this.productsService.products);
      },
      err => {
        console.log(err);
      }
    )
  }
}
