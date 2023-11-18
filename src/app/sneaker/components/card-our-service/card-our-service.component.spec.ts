import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardOurServiceComponent } from './card-our-service.component';

describe('CardOurServiceComponent', () => {
  let component: CardOurServiceComponent;
  let fixture: ComponentFixture<CardOurServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardOurServiceComponent]
    });
    fixture = TestBed.createComponent(CardOurServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
