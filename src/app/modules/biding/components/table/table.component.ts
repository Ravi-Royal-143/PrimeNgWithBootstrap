import { Component, Input, OnInit } from '@angular/core';
import { Bids } from '@interfaces/product';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() bids: Bids[] = [];
  cols: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.cols = [
      { field: 'bidAmount', header: 'Bid Amount' },
      { field: 'name', header: 'Name' },
      { field: 'email', header: 'Email' },
      { field: 'phone', header: 'Mobile' },
    ];
  }

}
