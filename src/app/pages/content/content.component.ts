import { Component, OnInit } from '@angular/core';
import { dataFake } from '../../../data/dataFake';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-content',
  standalone: false,
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit {

	imageBuy: string = ""
	buttonBuy: string = ""
	price: string = ""

	title: string = ""
	fiche: string = ""

	company: string = ""

	description: string = ``

	tag: string = ""
	tagWarning: string = ""

	trailer: string = ""


	private cardId: string | null = "0"

	constructor(
		private route: ActivatedRoute
	){}

	ngOnInit(): void {
		this.route.paramMap.subscribe(value =>
			this.cardId = value.get('id')
		)
		this.setValuesToComponent(this.cardId)
	}

	setValuesToComponent(id:string | null){
		const result = dataFake.filter(article => article.cardId === id)[0];

		this.imageBuy = result.imageBuy
		this.buttonBuy = result.buttonBuy
		this.price = result.price

		this.title = result.title
		this.fiche = result.fiche

		this.company = result.company

		this.description = result.description

		this.tag = result.tag
		this.tagWarning = result.tagWarning

		this.trailer = result.trailer
	}
}
