import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tag',
	standalone: false,
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent {
  @Input() tag: string = "";
  @Input() tagWarning: string = "";
}
