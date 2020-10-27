import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryButtomComponent } from './secondary-buttom.component';

describe('SecondaryButtomComponent', () => {
  let component: SecondaryButtomComponent;
  let fixture: ComponentFixture<SecondaryButtomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondaryButtomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondaryButtomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
