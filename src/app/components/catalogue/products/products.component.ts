import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @Input() data: any;

  constructor() { }
 
  counter = 0;
  value = '';
  bool = false;

  ngOnInit(): void { 
    var dropdowns = document.querySelectorAll('.dropdown-trigger')
    for (var i = 0; i < dropdowns.length; i++){
        M.Dropdown.init(dropdowns[i]);
    }   
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.modal');
      var instances = M.Modal.init(elems);
      var elems2 = document.querySelectorAll('.sidenav');
      var instances2 = M.Sidenav.init(elems2, {});
    });
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