import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // För att använda ngModel
import { CommonModule } from '@angular/common'; // För att använda *ngIf

@Component({
  selector: 'app-converter',
  standalone: true,  // denna component är inte beroende av andra 
  imports: [FormsModule, CommonModule],  // Lägg till CommonModule här eftersom component är standalone
  templateUrl: './converter.component.html', //importera html och css
  styleUrl: './converter.component.css'
})

export class ConverterComponent {
  conversionType: string = 'meTofe'; // vilken typ av konvertering som valts och som standard är det meter till feet. 
  inputData: number = 0;  //imatat värde
  convertedData: number | null = null;   //resultat av konvertering


  convert() {
    switch (this.conversionType) {  //kontrollera vilken konvertering som användaren valt och räknar ut resultatet baserat på inputValue.
      // första alternativ är Meter till Feet
      case 'meTofe':
        this.convertedData = this.inputData * 3.28084;
        break;

      // andra alternativ är Feet till Meter
      case 'feTome':
        this.convertedData = this.inputData / 3.28084;
        break;

      // tredje alternativ är Celsius till Fahrenheit
      case 'ceTofa':
        this.convertedData = this.inputData * 9 / 5 + 32;
        break;

      // fjärde alternativ är Fahrenheit till Celsius
      case 'faToce':
        this.convertedData = (this.inputData - 32) * 5 / 9;
        break;

      default:
        this.convertedData = null; 
    }
  }
}
