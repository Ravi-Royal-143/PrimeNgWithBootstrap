import { Component, OnInit } from '@angular/core';
import { Bids, ProductDetailsRes, ProductRes, ProductSuggestions } from '@interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-biding',
  templateUrl: './biding.component.html',
  styleUrls: ['./biding.component.scss']
})
export class BidingComponent implements OnInit {

  products: ProductSuggestions[] = [];
  productDetails: ProductDetailsRes;

  selectedProduct = null;
  bids = null;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.fetchProduct().subscribe((res: ProductRes[]) => {
      this.products = res;
    });
  }

  fetchDetails() {
    this.productService.fetchProductDetails(this.selectedProduct.productid).subscribe((res: ProductDetailsRes) => {
      this.productDetails = res;
      this.bids = res.bids.map((data: Bids) => {
        return {
          ...data,
          name: `${data.firstName} ${data.lastName}`
        }
      })
    })
  }
}
