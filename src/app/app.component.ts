import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 nbr: number = 0

  change(amt: number): void{
    this.nbr+= amt
 }


}
