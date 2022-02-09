import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertsComponent } from './alerts.component';

import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [AlertsComponent],
  imports: [
    CommonModule,
    ButtonModule
  ],
  exports: [AlertsComponent]
})
export class AlertsModule { }
