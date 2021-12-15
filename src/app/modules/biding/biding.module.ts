import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';

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
    BidingRoutingModule,
    TableModule,
    DropdownModule,
    FormsModule,
    ButtonModule
  ]
})
export class BidingModule { }
