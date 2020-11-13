import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaleteColorsComponent } from './palete-colors.component';

describe('PaleteColorsComponent', () => {
  let component: PaleteColorsComponent;
  let fixture: ComponentFixture<PaleteColorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaleteColorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaleteColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
