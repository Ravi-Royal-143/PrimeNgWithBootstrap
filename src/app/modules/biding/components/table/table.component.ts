import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  cols: any[] = [];

  products = [{
    bidAmount: "dummy",
    name: "dummy",
    email: "dummy",
    mobile: "dummy"
  }];

  constructor() { }

  ngOnInit(): void {

    this.cols = [
      { field: 'bidAmount', header: 'Bid Amount' },
      { field: 'name', header: 'Name' },
      { field: 'email', header: 'Email' },
      { field: 'mobile', header: 'Mobile' }
    ];
  }

}
