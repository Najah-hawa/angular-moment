import { Routes } from '@angular/router';
import { HomeComponent } from './web_pages/home/home.component';
import { AboutComponent } from './web_pages/about/about.component';
import { ConverterComponent } from './web_pages/converter/converter.component';


export const routes: Routes = [
    { path:"home", component: HomeComponent},
    { path: 'about', component: AboutComponent },
    { path: 'converter', component: ConverterComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

