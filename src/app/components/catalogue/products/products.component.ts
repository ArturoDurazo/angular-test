import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }
 
  counter = 0;
  value = '';
  bool = false;

  ngOnInit(): void {
    //console.log(this.counter);
  }

  increment(){
    if (this.value !== '' && this.bool )
      this.counter = parseInt(this.value);

    this.counter++;
    this.bool = false;
  }

  decrement(){
    if (this.value !== '' && this.bool )
      this.counter = parseInt(this.value);

    if(this.counter != 0)
    this.counter--;

    this.bool = false;
  }

  onEnter(value: string) { 
    this.value = value;
    this.bool = true; 
    console.log(value);
    
  }
}