import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBestSellingComponent } from './card-best-selling.component';

describe('CardBestSellingComponent', () => {
  let component: CardBestSellingComponent;
  let fixture: ComponentFixture<CardBestSellingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardBestSellingComponent]
    });
    fixture = TestBed.createComponent(CardBestSellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
