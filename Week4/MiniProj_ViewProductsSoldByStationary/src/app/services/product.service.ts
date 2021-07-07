import { Injectable } from '@angular/core';
import { Products } from '../../assets/Products'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  constructor() { }

  get getProducts() {
    return Products;
  }
}
