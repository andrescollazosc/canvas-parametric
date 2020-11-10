import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoboxComponent } from './promobox.component';

describe('PromoboxComponent', () => {
  let component: PromoboxComponent;
  let fixture: ComponentFixture<PromoboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromoboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
