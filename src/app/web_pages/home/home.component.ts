import { Component } from '@angular/core';
import { MiunSectionComponent } from '../../components/miun-section/miun-section.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MiunSectionComponent], 
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {}
