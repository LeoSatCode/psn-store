import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-card',
  standalone: false,
  templateUrl: './title-card.component.html',
  styleUrls: ['./title-card.component.css']
})
export class TitleCardComponent {

	@Input() title: string = "";
  @Input() fiche: string = "";
  @Input() company: string = "";

	constructor(){}

  onRate(event: any): void {
    console.log('Rated:', event);
  }
}
