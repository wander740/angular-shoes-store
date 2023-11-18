import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-variety',
  templateUrl: './card-variety.component.html',
  styleUrls: ['./card-variety.component.css', 'card-variety.responsive.component.css']
})
export class CardVarietyComponent {
  @Input() type: string = '';
  @Input() image: string = '';
  @Input() description: string = '';
}
