import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoboxCardComponent } from './promobox-card.component';

describe('PromoboxCardComponent', () => {
  let component: PromoboxCardComponent;
  let fixture: ComponentFixture<PromoboxCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromoboxCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoboxCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
