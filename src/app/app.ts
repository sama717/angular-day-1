import { Component, signal } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Slider } from './components/slider/slider';
import { Products } from './components/products/products';
import { Footer } from './components/footer/footer';


@Component({
  selector: 'app-root',
  imports: [Navbar, Slider, Products, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ecommerce-app');
}
