import { Component, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-tag',
  standalone: false,
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent {
  @Input() tag: string = "";
  @Input() tagWarning: string = "";

  @HostBinding('style.backgroundColor') backgroundColor: string = '';

  ngOnChanges() {
    this.setBackgroundColor();
  }

  setBackgroundColor() {
    switch(this.tag) {
      case '12':
        this.backgroundColor = '#FFA500';
        break;
      case '14':
        this.backgroundColor = 'orange';
        break;
      case '18':
        this.backgroundColor = 'black';
        break;
      default:
        this.backgroundColor = 'white';
        break;
    }
  }
}
