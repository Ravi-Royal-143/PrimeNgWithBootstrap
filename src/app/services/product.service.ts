import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductDetailsRes, ProductRes } from '@interfaces/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  fetchProduct(): Observable<ProductRes> {
    return this.http.get<ProductRes>("assets/data/products.json");
  }

  fetchProductDetails(selectedProduct: string) {
    return this.http.get<ProductDetailsRes>("assets/data/productDetails.json");
  }

}
