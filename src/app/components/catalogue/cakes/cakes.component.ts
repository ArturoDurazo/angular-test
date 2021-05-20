import { Component, OnInit } from '@angular/core';
import { ProductsService } from "../../../Services/products.service";

@Component({
  selector: 'app-cakes',
  templateUrl: './cakes.component.html',
  styleUrls: ['./cakes.component.css']
})
export class CakesComponent implements OnInit {

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    console.log(this.productsService.getProducts);
    
  }

}
