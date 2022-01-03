import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-produt-details',
  templateUrl: './produt-details.component.html',
  styleUrls: ['./produt-details.component.scss']
})
export class ProdutDetailsComponent {
  @Input() productDetails: any = null;
}
