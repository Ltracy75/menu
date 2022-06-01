import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
  menus: any[] = [
    { display : "Home", route: "http://tql.com" },
    { display : "Max", route: "http://maxtrain.com" },
    { display : "Microsoft", route: "http://Microsoft.com" }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
