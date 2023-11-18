import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuMidComponent } from './menu-mid.component';

describe('MenuMidComponent', () => {
  let component: MenuMidComponent;
  let fixture: ComponentFixture<MenuMidComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuMidComponent]
    });
    fixture = TestBed.createComponent(MenuMidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
