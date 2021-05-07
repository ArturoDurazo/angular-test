import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  selected: boolean = false;

  ngOnInit(): void {    
    var dropdowns = document.querySelectorAll('.dropdown-trigger')
    for (var i = 0; i < dropdowns.length; i++){
        M.Dropdown.init(dropdowns[i]);
    }   
  }
}
