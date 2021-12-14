import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableModule } from 'primeng/table';

import { BidingRoutingModule } from './biding-routing.module';
import { BidingComponent } from './biding.component';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [
    BidingComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    BidingRoutingModule
  ]
})
export class BidingModule { }
