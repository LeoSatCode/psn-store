import { Component, Input, OnInit } from '@angular/core';
import { cardDataFake } from '../../../data/cardDataFake';

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

	@Input() cardId: string = "";
  @Input() gameCover: string = "";
  @Input() gameLabel: string = "";
  @Input() gameCondition: string = "";
  @Input() gameType: string = "";
  @Input() gamePrice: string = "";

  constructor() {}

  ngOnInit(): void {
		const card = cardDataFake.find(card => card.id === this.cardId);
		if (card) {
			this.gameCover = card.gameCover;
			this.gameLabel = card.gameLabel;
			this.gameCondition = card.gameCondition;
			this.gameType = card.gameType;
			this.gamePrice = card.gamePrice;
		}
	}

  playSound(): void {
    const audio = new Audio('assets/sounds/ps-store.ogg');
    audio.play().catch(error => {
      console.error('Error playing sound:', error);
    });
  }
}
