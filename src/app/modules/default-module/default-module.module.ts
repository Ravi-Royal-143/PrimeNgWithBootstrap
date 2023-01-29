import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultModuleComponent } from './default-module.component';



@NgModule({
  declarations: [
    DefaultModuleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [DefaultModuleComponent]
})
export class DefaultModuleModule { }
