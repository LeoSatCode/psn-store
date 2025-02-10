import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-trailer',
	standalone: false,
  templateUrl: './trailer.component.html',
  styleUrls: ['./trailer.component.css']
})
export class TrailerComponent {
  @Input() trailer: string = "";
}
