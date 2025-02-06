import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() gameCover: string = "";
  @Input() gameLabel: string = "";
  @Input() gameCondition: string = "";
  @Input() gameType: string = "";
  @Input() gamePrice: string = "";

  constructor() {}

  ngOnInit(): void {}

  playSound(): void {
    const audio = new Audio('assets/sounds/ps-store.ogg');
    audio.play().catch(error => {
      console.error('Error playing sound:', error);
    });
  }
}
