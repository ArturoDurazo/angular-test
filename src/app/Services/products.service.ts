import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../Model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  API_URL="http://localhost:3000/api/products";
  products: Product[] | undefined
  private URL="";
  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get<Product[]>(this.API_URL);
  }

  getCakes(){
    return this.http.get<Product[]>(this.API_URL);
  }

  getDrinks(){
    return this.http.get<Product[]>(this.API_URL);
  }

  getSpecialties(){
    return this.http.get<Product[]>(this.API_URL);
  }
}
