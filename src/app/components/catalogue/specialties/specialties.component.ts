import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-specialties',
  templateUrl: './specialties.component.html',
  styleUrls: ['./specialties.component.css']
})
export class SpecialtiesComponent implements OnInit {

  constructor(public productsService: ProductsService) { }

  ngOnInit(): void {
    //console.log(this.productsService.getProducts());
    this.getSpecialties();
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
