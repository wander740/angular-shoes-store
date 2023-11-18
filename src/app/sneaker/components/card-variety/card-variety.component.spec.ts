import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardVarietyComponent } from './card-variety.component';

describe('CardVarietyComponent', () => {
  let component: CardVarietyComponent;
  let fixture: ComponentFixture<CardVarietyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardVarietyComponent]
    });
    fixture = TestBed.createComponent(CardVarietyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
