import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingMultipleComponent } from './pricing-multiple.component';

describe('MultipleComponent', () => {
  let component: PricingMultipleComponent;
  let fixture: ComponentFixture<PricingMultipleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricingMultipleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingMultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
