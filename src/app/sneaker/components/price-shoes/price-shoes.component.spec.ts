import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceShoesComponent } from './price-shoes.component';

describe('PriceShoesComponent', () => {
  let component: PriceShoesComponent;
  let fixture: ComponentFixture<PriceShoesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PriceShoesComponent]
    });
    fixture = TestBed.createComponent(PriceShoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
