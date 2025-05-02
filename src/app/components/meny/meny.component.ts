import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-meny',
  imports: [RouterLink],    //aktiversa routerlink för att göra intärna linkar
  templateUrl: './meny.component.html',
  styleUrl: './meny.component.css'
})


export class MenyComponent  {
  menuOpen = false;   //lagt till en funktion för att öppna och stänga knappen i mobilläge

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }
}
