import { Component, OnInit, AfterViewInit } from '@angular/core';
import { cardDataFake } from '../../../data/cardDataFake';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	cardDataFake!: { id: string; gameCover: string; gameLabel: string; gameCondition: string; gameType: string; gamePrice: string; }[];

	constructor(){}

	ngAfterViewInit() {
    const cards = document.querySelectorAll('.container-home a');
    cards.forEach((card, index) => {
      card.classList.add('fade-in');
      (card as HTMLElement).style.animationDelay = `${index * 0.2}s`;
    });
  }

	ngOnInit(): void {
	this.cardDataFake = cardDataFake;
	}

}
