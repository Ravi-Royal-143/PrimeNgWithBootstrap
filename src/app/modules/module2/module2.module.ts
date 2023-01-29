import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Module2Component } from './module2.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes  = [{
  path: '',
  component: Module2Component
}]

@NgModule({
  declarations: [
    Module2Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Module2Module { }
