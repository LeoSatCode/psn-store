import { Component } from '@angular/core';

@Component({
  selector: 'app-title-card',
  standalone: false,
  templateUrl: './title-card.component.html',
  styleUrls: ['./title-card.component.css']
})
export class TitleCardComponent {

	constructor(){}

  onRate(event: any): void {
    console.log('Rated:', event);
  }
}
