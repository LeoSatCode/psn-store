import { Component, OnInit } from '@angular/core';
import { cardDataFake } from '../../../data/cardDataFake';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
	cardDataFake!: { id: string; gameCover: string; gameLabel: string; gameCondition: string; gameType: string; gamePrice: string; }[];

	constructor(){}

	ngOnInit(): void {
	this.cardDataFake = cardDataFake;
	}

}
