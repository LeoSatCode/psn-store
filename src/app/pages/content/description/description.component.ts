import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-description',
	standalone: false,
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent {
  @Input() description: string = "";
}
