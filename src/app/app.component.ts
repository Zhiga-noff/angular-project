import { Component } from '@angular/core';
import {IProduct} from "./modules/product";
import {products as data} from "./data/products";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular app';

  products:IProduct[]=data
}
