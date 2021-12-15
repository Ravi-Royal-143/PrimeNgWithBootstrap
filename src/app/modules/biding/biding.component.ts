import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-biding',
  templateUrl: './biding.component.html',
  styleUrls: ['./biding.component.scss']
})
export class BidingComponent implements OnInit {

  products = [
    { name: 'Product 1', code: 'NY' },
    { name: 'Product 2', code: 'RM' },
    { name: 'Product 3', code: 'LDN' }
  ];

  selectedProduct = null;
  constructor() { }

  ngOnInit(): void {
  }

}
