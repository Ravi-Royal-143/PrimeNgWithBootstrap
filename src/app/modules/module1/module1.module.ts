import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Module1Component } from './module1.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes  = [{
  path: '',
  component: Module1Component
}]

@NgModule({
  declarations: [
    Module1Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Module1Module { }
