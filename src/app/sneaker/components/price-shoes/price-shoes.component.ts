import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-price-shoes',
  templateUrl: './price-shoes.component.html',
  styleUrls: ['./price-shoes.component.css']
})
export class PriceShoesComponent {
  @Input() image: string = '';
  @Input() name: string = '';
  @Input() price: string = '';
}
