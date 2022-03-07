import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompoundInterestComponent } from './compound-interest.component';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [CompoundInterestComponent],
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    ReactiveFormsModule,
    ButtonModule,
    TableModule
  ],
  exports: [CompoundInterestComponent]
})
export class CompoundInterestModule { }
