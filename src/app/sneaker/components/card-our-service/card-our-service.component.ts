import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-our-service',
  templateUrl: './card-our-service.component.html',
  styleUrls: ['./card-our-service.component.css', 'card-our-service.responsive.component.css']
})
export class CardOurServiceComponent {
  @Input() title: string = '';
  @Input() text: string = '';
}
