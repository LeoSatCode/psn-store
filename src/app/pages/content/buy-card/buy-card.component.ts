import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-buy-card',
	standalone: false,
  templateUrl: './buy-card.component.html',
  styleUrls: ['./buy-card.component.css']
})
export class BuyCardComponent {
  @Input() imageBuy: string = "";
  @Input() buttonBuy: string = "";
  @Input() price: string = "";
}
